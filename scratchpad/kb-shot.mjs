import { chromium } from 'playwright-core';
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const p = await b.newPage({ viewport: { width: 1100, height: 1200 } });
for (const slug of ['no-name', 'end-of-pain', 'kingdom-key']) {
  await p.goto(`http://127.0.0.1:3016/fr/encyclopedie/keyblades/${slug}`, { waitUntil: 'networkidle' });
  const r = await p.evaluate(() => {
    const h = [...document.querySelectorAll('h2')].find(x => /Statistiques par jeu/.test(x.textContent));
    if (!h) return { table: false };
    const tb = h.parentElement.querySelector('table');
    return { table: !!tb, rows: tb.rows.length, cols: tb.rows[0].cells.length, head: [...tb.rows[0].cells].map(c => c.textContent.trim()).join(' | '), first: [...tb.rows[1].cells].map(c => c.textContent.trim()).join(' | ') };
  });
  console.log(slug, JSON.stringify(r, null, 0));
  if (slug === 'no-name' || slug === 'kingdom-key') {
    const el = await p.$('#stats-by-game');
    await el.scrollIntoViewIfNeeded();
    const sec = await p.evaluateHandle(() => document.querySelector('#stats-by-game').closest('section'));
    await sec.asElement().screenshot({ path: `/tmp/kb-${slug}.png` });
  }
}
await b.close();
