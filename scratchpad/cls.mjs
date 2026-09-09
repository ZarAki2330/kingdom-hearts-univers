import { chromium } from 'playwright-core';
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const p = await b.newPage({ viewport: { width: 412, height: 823 }, deviceScaleFactor: 2 });
await p.addInitScript(() => {
  window.__shifts = [];
  new PerformanceObserver((l) => {
    for (const e of l.getEntries()) {
      if (e.hadRecentInput) continue;
      window.__shifts.push({ value: +e.value.toFixed(4), sources: (e.sources || []).map((s) => (s.node ? (s.node.nodeName + '.' + (s.node.className || '').toString().slice(0, 60)) : '?')) });
    }
  }).observe({ type: 'layout-shift', buffered: true });
});
const client = await p.context().newCDPSession(p);
await client.send('Network.emulateNetworkConditions', { offline: false, downloadThroughput: 1.6 * 1024 * 1024 / 8, uploadThroughput: 750 * 1024 / 8, latency: 150 });
await client.send('Emulation.setCPUThrottlingRate', { rate: 4 });
await p.goto('http://127.0.0.1:3030/encyclopedie/personnages', { waitUntil: 'networkidle' });
await p.waitForTimeout(1500);
const s = await p.evaluate(() => window.__shifts);
console.log('CLS total :', s.reduce((a, x) => a + x.value, 0).toFixed(4));
for (const x of s) console.log(' ', x.value, x.sources.join(' | ').slice(0, 160));
await b.close();
