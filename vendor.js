const https=require('https'),fs=require('fs'),path=require('path');
const out=path.join(__dirname,'..','www','vendor','three.min.js');
const urls=['https://cdn.jsdelivr.net/npm/three@0.128.0/build/three.min.js','https://unpkg.com/three@0.128.0/build/three.min.js'];
const get=(u,n=0)=>new Promise((res,rej)=>https.get(u,r=>{if(r.statusCode>=300&&r.statusCode<400&&r.headers.location&&n<5){r.resume();return res(get(new URL(r.headers.location,u).href,n+1))}if(r.statusCode!==200){r.resume();return rej(new Error('HTTP '+r.statusCode))}const c=[];r.on('data',d=>c.push(d));r.on('end',()=>res(Buffer.concat(c)))}).on('error',rej));
(async()=>{fs.mkdirSync(path.dirname(out),{recursive:true});for(const u of urls){try{const b=await get(u);if(b.length<300000)throw new Error('unexpected file size');fs.writeFileSync(out,b);console.log('Saved',out,b.length);return}catch(e){console.warn('vendor:',u,e.message)}}console.warn('vendor: download failed, the game will use its CDN fallback')})();
