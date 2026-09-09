import { chromium } from 'playwright';
import fs from 'fs';
const src = fs.readFileSync('node_modules/axe-core/axe.min.js','utf8');
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
for (const theme of ['day','dusk','night','abyss']) {
  const p = await b.newPage({ viewportSize:{width:1280,height:900} });
  await p.goto('http://localhost:3311/a-propos', { waitUntil:'networkidle' });
  await p.evaluate(t => { document.documentElement.dataset.theme = t; }, theme);
  await p.addScriptTag({ content: src });
  const r = await p.evaluate(async () => (await axe.run(document, { runOnly:['wcag2a','wcag2aa','wcag21a','wcag21aa'] })).violations);
  console.log(theme, r.length ? r.map(v=>v.id+':'+v.nodes.length).join(', ') : 'OK');
  if (theme==='day') await p.screenshot({ path:'/tmp/a-propos.png', fullPage:true });
  await p.close();
}
await b.close();
