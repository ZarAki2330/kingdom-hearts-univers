import { chromium } from 'playwright-core';
import fs from 'fs';
const axe = fs.readFileSync('node_modules/axe-core/axe.min.js', 'utf8');
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const pages = ['/fr/encyclopedie/personnages', '/fr/encyclopedie/ennemis', '/fr/encyclopedie/mondes',
  '/fr/encyclopedie/personnages/aerith', '/fr/encyclopedie/ennemis/dusk', '/fr/encyclopedie/mondes/agrabah'];
for (const theme of ['dawn', 'day', 'dusk', 'night']) {
  const p = await b.newPage({ viewport: { width: 1280, height: 900 } });
  await p.goto('http://127.0.0.1:3021/fr', { waitUntil: 'domcontentloaded' });
  await p.evaluate((t) => localStorage.setItem('khu-theme', t), theme);
  const bad = [];
  for (const u of pages) {
    const r0 = await p.goto('http://127.0.0.1:3021' + u, { waitUntil: 'networkidle' });
    if (r0.status() >= 400) { bad.push(u + ' ' + r0.status()); continue; }
    await p.evaluate((a) => { const s = document.createElement('script'); s.textContent = a; document.head.appendChild(s); }, axe);
    const r = await p.evaluate(() => axe.run(document, { runOnly: ['wcag2a','wcag2aa','wcag21a','wcag21aa','wcag22aa'] }));
    if (r.violations.length) bad.push(u + ' → ' + r.violations.map(v => v.id + '(' + v.nodes.length + ') ' + (v.nodes[0]?.any[0]?.message || '').slice(0, 110)).join(' | '));
  }
  console.log(theme, ':', bad.length ? '\n   ' + bad.join('\n   ') : 'ok');
  await p.close();
}
await b.close();
