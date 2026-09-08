import { chromium } from 'playwright-core';
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const p = await b.newPage({ viewport: { width: 1000, height: 800 } });
await p.goto('http://127.0.0.1:3012/fr/recherche?q=riku', { waitUntil: 'networkidle' });
console.log('images :', await p.evaluate(() => [...document.querySelectorAll('li img')].map(i => i.currentSrc ? 'ok' : 'vide').join(',')));
await p.screenshot({ path: '/tmp/recherche.png', clip: { x: 0, y: 150, width: 1000, height: 480 } });
await b.close();
