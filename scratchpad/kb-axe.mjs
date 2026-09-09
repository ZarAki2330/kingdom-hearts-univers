import { chromium } from 'playwright-core';
import fs from 'fs';
const axe = fs.readFileSync('node_modules/axe-core/axe.min.js', 'utf8');
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
for (const theme of ['day', 'night']) {
  const p = await b.newPage({ viewport: { width: 1280, height: 900 } });
  await p.goto('http://127.0.0.1:3018/fr', { waitUntil: 'domcontentloaded' });
  await p.evaluate((t) => localStorage.setItem('khu-theme', t), theme);
  for (const slug of ['kingdom-key', 'ever-after']) {
    await p.goto(`http://127.0.0.1:3018/fr/encyclopedie/keyblades/${slug}`, { waitUntil: 'networkidle' });
    await p.evaluate((a) => { const s = document.createElement('script'); s.textContent = a; document.head.appendChild(s); }, axe);
    const r = await p.evaluate(() => axe.run(document, { runOnly: ['wcag2a','wcag2aa','wcag21a','wcag21aa','wcag22aa'] }));
    console.log(theme, slug, ':', r.violations.length ? r.violations.map(v => v.id + '(' + v.nodes.length + ')').join(', ') : 'ok');
  }
  await p.close();
}
await b.close();
