import { chromium } from 'playwright-core';
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const p = await b.newPage();
const bad = new Set();
p.on('response', (r) => { if (r.status() >= 400) bad.add(r.status() + ' ' + r.url()); });
for (const u of ['/', '/jeux', '/encyclopedie/personnages', '/histoire/kingdom-hearts']) {
  await p.goto('http://127.0.0.1:3027' + u, { waitUntil: 'networkidle' });
}
await b.close();
console.log([...bad].join('\n') || 'aucune requête en échec');
