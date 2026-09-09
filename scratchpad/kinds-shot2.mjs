import { chromium } from 'playwright-core';
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
for (const theme of ['night']) {
  const p = await b.newPage({ viewport: { width: 1200, height: 1000 } });
  await p.goto('http://127.0.0.1:3020/fr', { waitUntil: 'domcontentloaded' });
  await p.evaluate((t) => localStorage.setItem('khu-theme', t), theme);
  await p.goto('http://127.0.0.1:3020/fr/encyclopedie/personnages', { waitUntil: 'networkidle' });
  await p.screenshot({ path: `/tmp/kinds-${theme}.png`, clip: { x: 0, y: 330, width: 1200, height: 330 } });
  await p.goto('http://127.0.0.1:3020/fr/encyclopedie/mondes', { waitUntil: 'networkidle' });
  await p.screenshot({ path: `/tmp/kinds-mondes.png`, clip: { x: 0, y: 330, width: 1200, height: 330 } });
  await p.close();
}
await b.close();
