import { chromium } from 'playwright-core';
import fs from 'node:fs';
const AXE = fs.readFileSync('node_modules/axe-core/axe.min.js','utf8');
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const p = await b.newPage({ viewport: { width: 1280, height: 900 } });
const seen = new Set();
for (const url of ['/fr','/fr/encyclopedie/personnages','/fr/encyclopedie/personnages/sora','/fr/glossaire','/fr/jeux']) {
  await p.goto('http://127.0.0.1:3000'+url, { waitUntil: 'networkidle' });
  await p.addScriptTag({ content: AXE });
  const res = await p.evaluate(async () => await window.axe.run(document, { runOnly: ['target-size','color-contrast','heading-order'] }));
  for (const v of res.violations) for (const n of v.nodes) seen.add(v.id + ' :: ' + n.target.join(' ') + ' :: ' + (n.failureSummary||'').split('\n')[1]);
}
await b.close();
console.log([...seen].join('\n'));
