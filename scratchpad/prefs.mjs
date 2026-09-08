import { chromium } from 'playwright-core';
import fs from 'fs';
const axe = fs.readFileSync('node_modules/axe-core/axe.min.js', 'utf8');
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const p = await b.newPage({ viewport: { width: 1280, height: 900 } });
const base = 'http://127.0.0.1:3007/fr';
await p.goto(base + '/accessibilite', { waitUntil: 'networkidle' });
for (const label of ['Contraste élevé', 'Animations réduites', 'Très grande (125 %)']) {
  await p.getByRole('button', { name: label, exact: true }).click();
  await p.waitForTimeout(120);
}
console.log('attributs :', JSON.stringify(await p.evaluate(() => {
  const d = document.documentElement;
  return { contrast: d.dataset.contrast, motion: d.dataset.motion, text: d.dataset.text, font: getComputedStyle(d).fontSize, stored: Object.keys(localStorage).filter(k => k.startsWith('khu-')).sort().join(',') };
})));
await p.screenshot({ path: '/tmp/shot-a11y-page.png' });
for (const [name, url] of [['accueil', base], ['encyclopedie', base + '/encyclopedie/personnages'], ['chronologie', base + '/chronologie']]) {
  await p.goto(url, { waitUntil: 'networkidle' });
  const st = await p.evaluate(() => {
    const d = document.documentElement;
    const body = getComputedStyle(document.body);
    return { c: d.dataset.contrast, m: d.dataset.motion, t: d.dataset.text, bg: body.backgroundColor, fg: body.color,
      motionOk: [...document.querySelectorAll('*')].every((e) => getComputedStyle(e).transitionDuration === '0s') };
  });
  console.log(name, JSON.stringify(st));
  await p.screenshot({ path: `/tmp/shot-hc-${name}.png` });
  await p.evaluate((a) => { const s = document.createElement('script'); s.textContent = a; document.head.appendChild(s); }, axe);
  const r = await p.evaluate(() => axe.run(document, { runOnly: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'] }));
  console.log('   axe :', r.violations.length ? r.violations.map((v) => v.id + ' (' + v.nodes.length + ')').join(', ') : '0 violation');
}
await b.close();
