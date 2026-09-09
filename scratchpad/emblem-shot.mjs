import { chromium } from 'playwright-core';
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const p = await b.newPage({ viewport: { width: 1000, height: 700 }, deviceScaleFactor: 2 });
await p.goto('http://127.0.0.1:3036/', { waitUntil: 'networkidle' });
await p.screenshot({ path: '/tmp/emblem-header.png', clip: { x: 0, y: 0, width: 420, height: 70 } });
const hero = await p.$('svg.h-full, main svg');
await p.screenshot({ path: '/tmp/emblem-hero.png', clip: { x: 520, y: 120, width: 440, height: 440 } });
await b.close();
