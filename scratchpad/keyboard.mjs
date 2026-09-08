import { chromium } from 'playwright-core';
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const p = await b.newPage({ viewport: { width: 1280, height: 900 } });
const problems = [];
const info = (m) => console.log('  ' + m);
const active = () => p.evaluate(() => {
  const a = document.activeElement;
  if (!a) return null;
  const style = getComputedStyle(a);
  return {
    tag: a.tagName.toLowerCase(),
    label: (a.getAttribute('aria-label') || a.textContent || '').trim().slice(0, 48),
    outline: style.outlineStyle + ' ' + style.outlineWidth + ' ' + style.outlineColor,
    visible: a.getBoundingClientRect().width > 0,
  };
});

console.log('\n=== 1. Skip-link ===');
await p.goto('http://127.0.0.1:3007/fr', { waitUntil: 'networkidle' });
await p.keyboard.press('Tab');
let a = await active();
info('premier Tab : ' + JSON.stringify(a));
if (!/aller au contenu|skip/i.test(a.label)) problems.push('Le premier élément focusable n’est pas le skip-link');
if (!a.visible) problems.push('Le skip-link reste invisible au focus');
await p.keyboard.press('Enter');
await p.waitForTimeout(200);
const target = await p.evaluate(() => ({ hash: location.hash, main: !!document.querySelector('main#contenu, main#main, main') }));
info('après Entrée : ' + JSON.stringify(target));
const afterSkip = await p.evaluate(() => {
  const el = document.querySelector(location.hash || '#nope');
  return el ? { id: el.id, tag: el.tagName.toLowerCase(), tabindex: el.getAttribute('tabindex') } : null;
});
info('cible du skip-link : ' + JSON.stringify(afterSkip));
if (!afterSkip) problems.push('Le skip-link ne pointe pas sur une cible existante');

console.log('\n=== 2. Ordre de tabulation dans l’en-tête ===');
await p.goto('http://127.0.0.1:3007/fr', { waitUntil: 'networkidle' });
const order = [];
for (let i = 0; i < 14; i++) { await p.keyboard.press('Tab'); order.push((await active()).label); }
info(order.join(' → '));

console.log('\n=== 3. Palette de recherche (Ctrl+K) ===');
// On part du bouton de recherche : le focus doit lui revenir à la fermeture.
await p.locator('button[aria-label]').filter({ hasNot: p.locator('svg[aria-hidden]:nth-child(2)') }).first().waitFor();
await p.evaluate(() => { const b=[...document.querySelectorAll('button')].find(x=>/recherch|search/i.test(x.getAttribute('aria-label')||'')); b && b.focus(); });
await p.keyboard.press('Control+k');
await p.waitForTimeout(400);
let inDialog = await p.evaluate(() => {
  const d = document.querySelector('[role="dialog"]');
  return d ? { open: true, focusInside: d.contains(document.activeElement), labelled: !!(d.getAttribute('aria-label') || d.getAttribute('aria-labelledby')), modal: d.getAttribute('aria-modal') } : { open: false };
});
info('ouverture : ' + JSON.stringify(inDialog));
if (!inDialog.open) problems.push('Ctrl+K n’ouvre pas la palette');
else {
  if (!inDialog.focusInside) problems.push('Le focus n’entre pas dans la palette à l’ouverture');
  if (!inDialog.labelled) problems.push('La palette n’a pas de nom accessible');
  if (inDialog.modal !== 'true') problems.push('La palette n’est pas marquée aria-modal');
  // piège de focus : 12 Tab doivent rester dans la boîte
  let escaped = false;
  for (let i = 0; i < 12; i++) {
    await p.keyboard.press('Tab');
    const inside = await p.evaluate(() => { const d = document.querySelector('[role="dialog"]'); return d ? d.contains(document.activeElement) : false; });
    if (!inside) { escaped = true; break; }
  }
  if (escaped) problems.push('Le focus sort de la palette au Tab (pas de piège de focus)');
  info('piège de focus : ' + (escaped ? 'ABSENT' : 'ok'));
  await p.keyboard.press('Escape');
  await p.waitForTimeout(300);
  const back = await active();
  info('après Échap, focus sur : ' + JSON.stringify(back));
  const closed = await p.evaluate(() => !document.querySelector('[role="dialog"]'));
  if (!closed) problems.push('Échap ne ferme pas la palette');
  if (!/recherch|search/i.test(back.label)) problems.push('Le focus ne revient pas sur le bouton de recherche après fermeture');
}

console.log('\n=== 4. Sous-menus de la navigation ===');
await p.goto('http://127.0.0.1:3007/fr', { waitUntil: 'networkidle' });
const chevron = p.locator('button[aria-label*="Sous-menu"]').first();
await chevron.focus();
await p.keyboard.press('Enter');
await p.waitForTimeout(300);
let sub = await p.evaluate(() => {
  const btn = document.querySelector('button[aria-label*="Sous-menu"]');
  return { expanded: btn?.getAttribute('aria-expanded'), links: document.querySelectorAll('nav a[href*="/encyclopedie/"]').length };
});
info('après Entrée : ' + JSON.stringify(sub));
if (sub.expanded !== 'true') problems.push('Le sous-menu ne s’ouvre pas au clavier');
await p.keyboard.press('Tab');
const first = await active();
info('premier élément après ouverture : ' + JSON.stringify(first.label));
await p.keyboard.press('Escape');
await p.waitForTimeout(200);
const afterEsc = await p.evaluate(() => document.querySelector('button[aria-label*="Sous-menu"]')?.getAttribute('aria-expanded'));
info('après Échap : aria-expanded=' + afterEsc);
if (afterEsc !== 'false') problems.push('Échap ne referme pas le sous-menu');

console.log('\n=== 5. Visibilité du focus ===');
await p.goto('http://127.0.0.1:3007/fr/encyclopedie/personnages', { waitUntil: 'networkidle' });
// Vraies tabulations : :focus-visible ne s'applique pas à un focus programmatique sur un lien.
const noRing = [];
const seen = new Set();
for (let i = 0; i < 40; i++) {
  await p.keyboard.press('Tab');
  const r = await p.evaluate(() => {
    const el = document.activeElement;
    if (!el || el === document.body) return null;
    const s = getComputedStyle(el);
    const ring = s.outlineStyle !== 'none' && parseFloat(s.outlineWidth) > 0;
    const shadow = s.boxShadow && s.boxShadow !== 'none';
    return { ok: ring || shadow, label: (el.getAttribute('aria-label') || el.textContent || el.tagName).trim().slice(0, 40) };
  });
  if (!r || seen.has(r.label)) continue;
  seen.add(r.label);
  if (!r.ok) noRing.push(r.label);
}
info(noRing.length ? 'sans indicateur de focus : ' + noRing.join(' | ') : 'tous les éléments ont un indicateur');
if (noRing.length) problems.push(noRing.length + ' élément(s) sans indicateur de focus visible');

console.log('\n=== 6. Pagination et filtres au clavier ===');
const pag = await p.evaluate(() => {
  const links = [...document.querySelectorAll('a[href*="page="]')].map(a => a.textContent.trim());
  const chips = [...document.querySelectorAll('button[aria-pressed], a[aria-current]')].length;
  return { links: links.slice(0, 4), chips };
});
info(JSON.stringify(pag));

await b.close();
console.log('\n=== BILAN ===');
console.log(problems.length ? problems.map(x => '❌ ' + x).join('\n') : '✅ aucun problème détecté');
