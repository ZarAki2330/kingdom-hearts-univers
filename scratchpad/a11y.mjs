import { chromium } from 'playwright-core';
import fs from 'node:fs';
const AXE = fs.readFileSync('node_modules/axe-core/axe.min.js', 'utf8');
const pages = [
  ['accueil', '/fr'],
  ['jeux', '/fr/jeux'],
  ['fiche jeu', '/fr/jeux/kingdom-hearts-iii'],
  ['chronologie', '/fr/chronologie'],
  ['encyclopédie', '/fr/encyclopedie'],
  ['liste personnages', '/fr/encyclopedie/personnages'],
  ['fiche personnage', '/fr/encyclopedie/personnages/sora'],
  ['histoire', '/fr/histoire'],
  ['résumé', '/fr/histoire/kingdom-hearts'],
  ['glossaire', '/fr/glossaire'],
  ['recherche', '/fr/recherche?q=sora'],
];
const themes = ['dawn', 'day', 'dusk', 'night'];
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const out = {};
for (const theme of themes) {
  for (const [name, url] of pages) {
    if (theme !== 'dawn' && !['accueil','liste personnages','fiche personnage','glossaire'].includes(name)) continue;
    const p = await b.newPage({ viewport: { width: 1280, height: 900 } });
    await p.goto('http://127.0.0.1:3020' + url, { waitUntil: 'networkidle' });
    await p.evaluate((t) => document.documentElement.setAttribute('data-theme', t), theme);
    await p.addScriptTag({ content: AXE });
    const res = await p.evaluate(async () => await window.axe.run(document, { runOnly: { type: 'tag', values: ['wcag2a','wcag2aa','wcag21a','wcag21aa','wcag22aa','best-practice'] } }));
    for (const v of res.violations) {
      const key = v.id;
      out[key] ??= { impact: v.impact, help: v.help, pages: new Set(), nodes: [] };
      out[key].pages.add(`${name}/${theme}`);
      for (const n of v.nodes.slice(0, 2)) out[key].nodes.push(n.target.join(' ') + ' — ' + (n.failureSummary||'').split('\n').slice(1,3).join(' | '));
    }
    await p.close();
  }
}
await b.close();
const rows = Object.entries(out).sort((a,b2) => (b2[1].pages.size - a[1].pages.size));
console.log(rows.length + ' types de violation\n');
for (const [id, v] of rows) {
  console.log(`### ${id} [${v.impact}] — ${v.pages.size} page(s)`);
  console.log('   ' + v.help);
  console.log('   pages : ' + [...v.pages].slice(0,6).join(', '));
  console.log('   ex. : ' + v.nodes.slice(0,2).join('\n         '));
  console.log();
}
