import { chromium } from 'playwright-core';
import lighthouse from 'lighthouse';
import desktop from 'lighthouse/core/config/desktop-config.js';

const PORT = process.env.LH_PORT || '3031';
const PAGES = ['/', '/jeux', '/encyclopedie/personnages', '/encyclopedie/personnages/sora', '/histoire/kingdom-hearts', '/glossaire'];
const preset = process.argv[2] === 'desktop' ? desktop : undefined;
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium', args: ['--remote-debugging-port=9222'] });
console.log(`\n=== Lighthouse (${preset ? 'ordinateur' : 'mobile'}) ===`);
const totals = { performance: [], accessibility: [], 'best-practices': [], seo: [] };
for (const path of PAGES) {
  const r = await lighthouse('http://127.0.0.1:' + PORT + path, { port: 9222, output: 'json', logLevel: 'error', onlyCategories: Object.keys(totals) }, preset);
  const c = r.lhr.categories;
  for (const k of Object.keys(totals)) totals[k].push(Math.round(c[k].score * 100));
  const fails = Object.values(r.lhr.audits)
    .filter(a => a.score !== null && a.score < 0.9 && !a.id.endsWith('-insight') && !['valid-source-maps', 'label-content-name-mismatch', 'bf-cache', 'max-potential-fid', 'unused-javascript', 'interactive'].includes(a.id))
    .map(a => `${a.id}${a.displayValue ? ' (' + a.displayValue + ')' : ''}`);
  console.log(`${path.padEnd(34)} perf ${String(Math.round(c.performance.score*100)).padStart(3)} · a11y ${String(Math.round(c.accessibility.score*100)).padStart(3)} · pratiques ${String(Math.round(c['best-practices'].score*100)).padStart(3)} · SEO ${String(Math.round(c.seo.score*100)).padStart(3)}`);
  if (fails.length) console.log('     ' + fails.join(' | '));
}
await browser.close();
const avg = (a) => Math.round(a.reduce((x, y) => x + y, 0) / a.length);
console.log('moyenne'.padEnd(34) + ` perf ${String(avg(totals.performance)).padStart(3)} · a11y ${String(avg(totals.accessibility)).padStart(3)} · pratiques ${String(avg(totals['best-practices'])).padStart(3)} · SEO ${String(avg(totals.seo)).padStart(3)}`);
