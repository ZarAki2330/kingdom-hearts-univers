import { chromium } from 'playwright';
import fs from 'fs';
const src = fs.readFileSync('node_modules/axe-core/axe.min.js','utf8');
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const pages = ['/soluces/kingdom-hearts','/soluces/kingdom-hearts/annexes/99-dalmatiens','/soluces/kingdom-hearts/annexes/marques-trio'];
for (const path of pages) {
  for (const theme of ['day','dusk','night','abyss']) {
    const p = await b.newPage({ viewportSize:{width:1280,height:900} });
    await p.goto('http://localhost:3315'+path, { waitUntil:'networkidle' });
    await p.evaluate(t => { document.documentElement.dataset.theme = t; }, theme);
    await p.addScriptTag({ content: src });
    const r = await p.evaluate(async () => (await axe.run(document, { runOnly:['wcag2a','wcag2aa','wcag21a','wcag21aa'] })).violations);
    console.log(path, theme, r.length ? r.map(v=>v.id+':'+v.nodes.length).join(', ') : 'OK');
    if (theme==='day') {
      const over = await p.evaluate(()=>document.documentElement.scrollWidth - document.documentElement.clientWidth);
      if (over>0) console.log('  débordement horizontal', over,'px');
      await p.screenshot({ path:'/tmp/w'+path.replace(/\//g,'_')+'.png', fullPage:true });
    }
    await p.close();
  }
}
// mobile
const m = await b.newPage({ viewportSize:{width:390,height:844} });
await m.goto('http://localhost:3315/soluces/kingdom-hearts/annexes/marques-trio', { waitUntil:'networkidle' });
console.log('mobile overflow', await m.evaluate(()=>document.documentElement.scrollWidth-document.documentElement.clientWidth));
await m.close();
await b.close();
