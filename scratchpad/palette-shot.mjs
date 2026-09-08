import { chromium } from 'playwright-core';
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const p = await b.newPage({ viewport: { width: 1280, height: 900 } });
await p.goto('http://127.0.0.1:3011/fr', { waitUntil: 'networkidle' });
await p.keyboard.press('Control+k');
await p.waitForTimeout(300);
for (const q of ['kingdom', 'chaine du royaume', 'destin']) {
  await p.fill('input[role="combobox"]', q);
  await p.waitForTimeout(600);
  const imgs = await p.evaluate(() => [...document.querySelectorAll('[role="option"] img')].map(i => i.currentSrc ? 'ok' : 'vide').join(','));
  console.log(q, ':', await p.evaluate(() => document.querySelectorAll('[role="option"]').length) + ' résultats,', 'images :', imgs || 'aucune');
  await p.screenshot({ path: `/tmp/palette-${q}.png`, clip: { x: 300, y: 60, width: 680, height: 460 } });
}
await b.close();
