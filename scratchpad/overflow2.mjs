import { chromium } from 'playwright-core';
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const modes = [null, 'large', 'xlarge'];
const pages = ['/fr', '/fr/jeux', '/fr/encyclopedie/personnages', '/fr/chronologie', '/fr/histoire/kingdom-hearts', '/fr/glossaire', '/fr/accessibilite'];
for (const m of modes) {
  for (const w of [1280, 390]) {
    const p = await b.newPage({ viewport: { width: w, height: 900 } });
    await p.goto('http://127.0.0.1:3007/fr/accessibilite', { waitUntil: 'domcontentloaded' });
    await p.evaluate((mm) => { mm ? localStorage.setItem('khu-text', mm) : localStorage.removeItem('khu-text'); }, m);
    const bad = [];
    for (const u of pages) {
      await p.goto('http://127.0.0.1:3007' + u, { waitUntil: 'networkidle' });
      const r = await p.evaluate(() => {
        const over = [];
        const w = document.documentElement.clientWidth;
        for (const el of document.querySelectorAll('body *')) {
          const b = el.getBoundingClientRect();
          if (b.right > w + 1 && b.width > 20 && getComputedStyle(el).position !== 'fixed')
            over.push(el.tagName.toLowerCase() + '.' + (el.className.toString().slice(0, 40)) + ' →' + Math.round(b.right));
        }
        return { scroll: document.documentElement.scrollWidth, client: w, first: over.slice(0, 3) };
      });
      if (r.scroll > r.client + 1) bad.push(u + ' ' + r.scroll + '/' + r.client + ' ' + JSON.stringify(r.first));
    }
    console.log((m ?? 'normal') + ' @' + w + ' :', bad.length ? '\n   ' + bad.join('\n   ') : 'ok');
    await p.close();
  }
}
await b.close();
