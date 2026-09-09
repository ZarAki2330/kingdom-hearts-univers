import { chromium } from 'playwright';
import fs from 'fs';
const src = fs.readFileSync('node_modules/axe-core/axe.min.js','utf8');
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const P='http://localhost:3323';
for (const [path,file] of [['/soluces/kingdom-hearts/annexes/trophees','troph']]) {
  for (const theme of ['day','night']) {
    const p = await b.newPage({ viewportSize:{width:1280,height:900} });
    await p.goto(P+path,{waitUntil:'networkidle'});
    await p.evaluate(t=>{document.documentElement.dataset.theme=t;},theme);
    await p.addScriptTag({content:src});
    const r=await p.evaluate(async()=> (await axe.run(document,{runOnly:['wcag2a','wcag2aa','wcag21a','wcag21aa']})).violations);
    console.log(file, theme, r.length? r.map(v=>v.id+':'+v.nodes.length).join(', '):'OK');
    if(theme==='day'){
      await p.evaluate(async()=>{for(let y=0;y<document.body.scrollHeight;y+=500){window.scrollTo(0,y);await new Promise(r=>setTimeout(r,120));}window.scrollTo(0,0);});
      await p.waitForTimeout(2500);
      await p.screenshot({path:'/tmp/'+file+'.png',fullPage:true});
    }
    await p.close();
  }
}
const m = await b.newPage({ viewportSize:{width:390,height:844} });
for (const path of ['/soluces/kingdom-hearts/iles-du-destin','/soluces/kingdom-hearts/annexes/trophees']) {
  await m.goto(P+path,{waitUntil:'networkidle'});
  console.log('mobile overflow', path, await m.evaluate(()=>document.documentElement.scrollWidth-document.documentElement.clientWidth));
}
await b.close();
