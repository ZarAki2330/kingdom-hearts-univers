import { chromium } from 'playwright-core';
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
for (const w of [1440, 1280, 1100, 900, 768, 390]) {
  const p = await b.newPage({ viewport: { width: w, height: 800 } });
  await p.goto('http://127.0.0.1:3007/fr', { waitUntil: 'networkidle' });
  const r = await p.evaluate(() => {
    const h = document.querySelector('header > div:nth-of-type(1)') || document.querySelector('header div');
    return { headerH: document.querySelector('header').getBoundingClientRect().height,
             over: document.documentElement.scrollWidth > document.documentElement.clientWidth };
  });
  console.log(w, JSON.stringify(r));
  if (w === 1280) await p.screenshot({ path: '/tmp/hdr-1280.png', clip: { x: 0, y: 0, width: w, height: 120 } });
  await p.close();
}
await b.close();
