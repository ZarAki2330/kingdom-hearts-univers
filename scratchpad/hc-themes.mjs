import { chromium } from 'playwright-core';
import fs from 'fs';
const axe = fs.readFileSync('node_modules/axe-core/axe.min.js', 'utf8');
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const base = 'http://127.0.0.1:3009/fr';
for (const theme of ['dawn', 'day', 'dusk', 'night']) {
  const p = await b.newPage({ viewport: { width: 1280, height: 900 } });
  await p.goto(base + '/accessibilite', { waitUntil: 'domcontentloaded' });
  await p.evaluate((t) => { localStorage.setItem('khu-theme', t); localStorage.setItem('khu-contrast', 'more'); }, theme);
  for (const u of ['', '/encyclopedie/personnages', '/jeux', '/histoire/kingdom-hearts']) {
    await p.goto(base + u, { waitUntil: 'networkidle' });
    await p.evaluate((a) => { const s = document.createElement('script'); s.textContent = a; document.head.appendChild(s); }, axe);
    const r = await p.evaluate(() => axe.run(document, { runOnly: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'] }));
    console.log(theme, u || '/', ':', r.violations.length ? r.violations.map((v) => v.id + '(' + v.nodes.length + ') ' + (v.nodes[0]?.any[0]?.message || '').slice(0, 90)).join(' | ') : 'ok');
  }
  await p.close();
}
await b.close();
