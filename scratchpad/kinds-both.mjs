import { chromium } from 'playwright-core';
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const p = await b.newPage({ viewport: { width: 1200, height: 900 } });
await p.goto('http://127.0.0.1:3021/fr/encyclopedie/ennemis?type=heartless', { waitUntil: 'networkidle' });
await p.screenshot({ path: '/tmp/kinds-heartless.png', clip: { x: 0, y: 330, width: 1200, height: 230 } });
await p.goto('http://127.0.0.1:3021/fr/encyclopedie/ennemis?type=unversed', { waitUntil: 'networkidle' });
await p.screenshot({ path: '/tmp/kinds-unversed.png', clip: { x: 0, y: 330, width: 1200, height: 230 } });
console.log(await p.evaluate(() => [...document.querySelectorAll('li.card')].slice(0,2).map(li => ({ k: [...li.classList].find(c=>c.startsWith('k-')), c: getComputedStyle(li).borderLeftColor }))));
await b.close();
