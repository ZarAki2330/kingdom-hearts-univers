import { chromium } from 'playwright-core';
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
for (const w of [1280, 1024, 900, 640, 390]) {
  const p = await b.newPage({ viewport: { width: w, height: 900 } });
  await p.goto('http://127.0.0.1:3002/fr/accessibilite', { waitUntil: 'networkidle' });
  await p.evaluate(() => { localStorage.setItem('khu-text','xlarge'); localStorage.setItem('khu-contrast','more'); });
  await p.goto('http://127.0.0.1:3002/fr', { waitUntil: 'networkidle' });
  const r = await p.evaluate(() => ({ scroll: document.documentElement.scrollWidth, client: document.documentElement.clientWidth }));
  console.log(w, JSON.stringify(r), r.scroll > r.client + 1 ? '❌ débordement' : 'ok');
  await p.close();
}
await b.close();
