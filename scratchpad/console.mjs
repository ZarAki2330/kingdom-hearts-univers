import { chromium } from 'playwright-core';
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const p = await b.newPage();
const msgs = [];
p.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') msgs.push(m.type() + ' : ' + m.text().slice(0, 200)); });
p.on('pageerror', (e) => msgs.push('pageerror : ' + e.message.slice(0, 200)));
p.on('requestfailed', (r) => msgs.push('requête échouée : ' + r.url().slice(0, 120) + ' — ' + r.failure()?.errorText));
for (const u of ['/', '/jeux', '/encyclopedie/personnages']) {
  await p.goto('http://127.0.0.1:3027' + u, { waitUntil: 'networkidle' });
}
await b.close();
console.log(msgs.length ? [...new Set(msgs)].join('\n') : 'aucun message');
