import { chromium } from 'playwright-core';
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const p = await b.newPage({ viewport: { width: 1280, height: 900 } });
const problems = [];
await p.goto('http://127.0.0.1:3034/fr/encyclopedie/personnages/sora', { waitUntil: 'networkidle' });
const trigger = p.locator('button[aria-label^="Agrandir"]').first();
console.log('déclencheur :', await trigger.getAttribute('aria-label'));
await trigger.click();
await p.waitForTimeout(300);
let d = await p.evaluate(() => {
  const dlg = document.querySelector('[role="dialog"]');
  if (!dlg) return null;
  const img = dlg.querySelector('img');
  return { modal: dlg.getAttribute('aria-modal'), label: dlg.getAttribute('aria-label'), focus: document.activeElement.textContent.trim(),
    img: { w: Math.round(img.getBoundingClientRect().width), natural: img.naturalWidth }, credit: dlg.querySelector('p')?.textContent.slice(0, 40),
    scroll: getComputedStyle(document.body).overflow };
});
console.log('ouverture :', JSON.stringify(d));
if (!d) problems.push("la visionneuse ne s'ouvre pas");
else {
  if (d.modal !== 'true') problems.push('aria-modal absent');
  if (!d.credit) problems.push('crédit absent');
  if (d.scroll !== 'hidden') problems.push('la page défile derrière');
  if (d.img.w > d.img.natural * 2.5) problems.push('image agrandie beaucoup au-delà du double');
}
// piège de focus
let escaped = false;
for (let i = 0; i < 6; i++) {
  await p.keyboard.press('Tab');
  const inside = await p.evaluate(() => document.querySelector('[role="dialog"]')?.contains(document.activeElement));
  if (!inside) { escaped = true; break; }
}
if (escaped) problems.push('le focus sort de la visionneuse');
await p.keyboard.press('Escape');
await p.waitForTimeout(250);
const after = await p.evaluate(() => ({ closed: !document.querySelector('[role="dialog"]'), focus: document.activeElement.getAttribute('aria-label'), scroll: getComputedStyle(document.body).overflow }));
console.log('après Échap :', JSON.stringify(after));
if (!after.closed) problems.push('Échap ne ferme pas');
if (!/Agrandir/.test(after.focus || '')) problems.push('le focus ne revient pas sur la vignette');
if (after.scroll === 'hidden') problems.push('le défilement de la page reste bloqué');
// clic à côté
await trigger.click(); await p.waitForTimeout(200);
await p.mouse.click(20, 20); await p.waitForTimeout(250);
if (await p.evaluate(() => !!document.querySelector('[role="dialog"]'))) problems.push('un clic à côté ne ferme pas');
// fiche de jeu (jaquette)
await p.goto('http://127.0.0.1:3034/fr/jeux/kingdom-hearts', { waitUntil: 'networkidle' });
const t2 = p.locator('button[aria-label^="Agrandir"]');
console.log('fiche de jeu, déclencheurs :', await t2.count());
if (await t2.count() === 0) problems.push('pas de zoom sur la fiche de jeu');
else { await t2.first().click(); await p.waitForTimeout(300); await p.screenshot({ path: '/tmp/zoom-jeu.png' }); await p.keyboard.press('Escape'); }
await p.goto('http://127.0.0.1:3034/fr/encyclopedie/keyblades/oblivion', { waitUntil: 'networkidle' });
await p.locator('button[aria-label^="Agrandir"]').first().click();
await p.waitForTimeout(300);
await p.screenshot({ path: '/tmp/zoom-fiche.png' });
await b.close();
console.log('\n=== BILAN ===');
console.log(problems.length ? problems.map(x => '❌ ' + x).join('\n') : '✅ aucun problème détecté');
