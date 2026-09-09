import { chromium } from 'playwright-core';
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const p = await b.newPage({ viewport: { width: 1200, height: 1000 } });
await p.goto('http://127.0.0.1:3021/fr/encyclopedie/personnages', { waitUntil: 'networkidle' });
console.log(await p.evaluate(() => [...document.querySelectorAll('li.card')].slice(0, 6).map(li => ({
  k: [...li.classList].find(c => c.startsWith('k-')),
  edge: getComputedStyle(li).borderLeftColor,
  eyebrow: getComputedStyle(li.querySelector('.eyebrow')).color,
  name: li.querySelector('h3').textContent.slice(0, 18),
}))));
await p.screenshot({ path: '/tmp/kinds-list.png', clip: { x: 0, y: 330, width: 1200, height: 430 } });
await p.goto('http://127.0.0.1:3021/fr/encyclopedie/personnages/aladdin', { waitUntil: 'networkidle' });
await p.screenshot({ path: '/tmp/kinds-fiche.png', clip: { x: 0, y: 60, width: 1200, height: 420 } });
await p.goto('http://127.0.0.1:3021/fr/encyclopedie/ennemis', { waitUntil: 'networkidle' });
await p.screenshot({ path: '/tmp/kinds-enemies.png', clip: { x: 0, y: 330, width: 1200, height: 430 } });
await b.close();
