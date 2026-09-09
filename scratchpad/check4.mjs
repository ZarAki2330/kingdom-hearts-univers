import { chromium } from 'playwright';
import fs from 'fs';
const src = fs.readFileSync('node_modules/axe-core/axe.min.js','utf8');
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const P='http://localhost:3316';
for (const [path,file] of [['/soluces/kingdom-hearts/annexes/99-dalmatiens','dalmatiens'],['/soluces/kingdom-hearts/annexes/marques-trio','trio'],['/encyclopedie/personnages/pongo-and-perdita','pongo']]) {
  for (const theme of ['day','night']) {
    const p = await b.newPage({ viewportSize:{width:1280,height:900} });
    await p.goto(P+path,{waitUntil:'networkidle'});
    await p.evaluate(t=>{document.documentElement.dataset.theme=t;},theme);
    await p.addScriptTag({content:src});
    const r = await p.evaluate(async()=> (await axe.run(document,{runOnly:['wcag2a','wcag2aa','wcag21a','wcag21aa']})).violations);
    console.log(file, theme, r.length? r.map(v=>v.id+':'+v.nodes.length).join(', '):'OK');
    if(theme==='day'){ await p.waitForTimeout(800); await p.screenshot({path:'/tmp/'+file+'.png',fullPage:true}); }
    await p.close();
  }
}
const g = await b.newPage({ viewportSize:{width:1100,height:900} });
await g.goto(P+'/soluces/kingdom-hearts',{waitUntil:'networkidle'});
await g.evaluate(async()=>{for(let y=0;y<document.body.scrollHeight;y+=400){window.scrollTo(0,y);await new Promise(r=>setTimeout(r,120));}});
await g.waitForTimeout(2500);
await (await g.$('section[aria-labelledby="annexes"]')).screenshot({path:'/tmp/grid2.png'});
await b.close();
