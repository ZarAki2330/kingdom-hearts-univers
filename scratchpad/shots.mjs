import { chromium } from 'playwright-core';
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const p = await b.newPage({ viewport: { width: 1280, height: 1000 } });
await p.goto('http://127.0.0.1:3009/fr/accessibilite', { waitUntil: 'networkidle' });
await p.screenshot({ path: '/tmp/a11y-normal.png', fullPage: true });
for (const l of ['Contraste élevé', 'Très grande (125 %)']) { await p.getByRole('button', { name: l, exact: true }).click(); await p.waitForTimeout(150); }
await p.screenshot({ path: '/tmp/a11y-hc.png', fullPage: true });
await p.goto('http://127.0.0.1:3009/fr/encyclopedie/personnages', { waitUntil: 'networkidle' });
await p.screenshot({ path: '/tmp/a11y-hc-liste.png' });
await b.close();
