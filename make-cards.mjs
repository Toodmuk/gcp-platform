// Render the 7 Nugget Traveler character cards as transparent PNGs for the deck.
import puppeteer from 'puppeteer-core'
import { CHARACTERS } from './src/data.js'

const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe'
const OUT = '../character-cards/'
import { mkdirSync } from 'fs'
mkdirSync(OUT, { recursive: true })

const HEAD = `
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet">
<style>
  * { margin:0; padding:0; box-sizing:border-box; }
  body { background: transparent; font-family: 'Inter', 'Segoe UI', sans-serif; color:#0b2545; }
  .card { width:720px; border-radius:34px; padding:44px 40px 0; position:relative; overflow:hidden;
          display:flex; flex-direction:column; gap:20px; }
  .top { display:flex; justify-content:space-between; font-size:17px; font-weight:800; letter-spacing:.14em; }
  .hero { text-align:center; margin-top:4px; }
  .emoji { font-size:150px; line-height:1.15; filter: drop-shadow(0 14px 22px rgba(11,37,69,.18)); }
  .title { font-size:20px; font-weight:800; letter-spacing:.18em; text-transform:uppercase; margin-top:10px; }
  .name { font-family:'Space Grotesk'; font-size:56px; font-weight:700; letter-spacing:-.01em; margin-top:2px; }
  .tag { font-size:21px; line-height:1.5; font-weight:600; text-align:center; padding:0 28px; color:#233a5c; }
  .traits { display:flex; flex-wrap:wrap; gap:10px; justify-content:center; }
  .traits span { background:rgba(255,255,255,.85); border-radius:999px; padding:9px 18px; font-size:16.5px; font-weight:700; }
  .grid { display:grid; grid-template-columns:1fr 1fr; gap:10px; }
  .grid .f { background:rgba(255,255,255,.72); border-radius:14px; padding:12px 16px; }
  .grid b { display:block; font-size:11.5px; letter-spacing:.12em; text-transform:uppercase; color:#5b6b84; margin-bottom:3px; }
  .grid span { font-size:17px; font-weight:700; }
  .journey { background:#0b2545; color:#fff; border-radius:16px; padding:16px 20px; font-size:16.5px; line-height:1.45; }
  .journey b { color:#e8b84b; }
  .bottom { margin:8px -40px 0; background:rgba(11,37,69,.94); color:#fff; padding:16px 40px;
            display:flex; justify-content:space-between; align-items:center; font-size:14px; }
  .bottom b { color:#e8b84b; font-family:'Space Grotesk'; letter-spacing:.06em; }
  /* lineup */
  .row { display:flex; gap:26px; padding:4px; }
  .mini { width:250px; border-radius:24px; padding:26px 18px 22px; text-align:center; }
  .mini .emoji { font-size:84px; filter: drop-shadow(0 8px 14px rgba(11,37,69,.16)); }
  .mini .title { font-size:12px; letter-spacing:.14em; margin-top:8px; }
  .mini .name { font-size:27px; margin-top:1px; }
  .mini .lane { font-size:13.5px; font-weight:600; color:#233a5c; margin-top:8px; line-height:1.35; }
</style>`

const card = (c) => `<!doctype html><html><head>${HEAD}</head><body>
<div class="card" style="background:linear-gradient(168deg, ${c.bg}, #ffffff 52%, ${c.bg});">
  <div class="top"><span>EF · NUGGET TRAVELER</span><span style="color:${c.color}">#${c.id.toUpperCase()}</span></div>
  <div class="hero">
    <div class="emoji">${c.emoji}</div>
    <div class="title" style="color:${c.color}">${c.title}</div>
    <div class="name">${c.name}</div>
  </div>
  <div class="tag">“${c.tagline}”</div>
  <div class="traits">${c.traits.map((t) => `<span>${t}</span>`).join('')}</div>
  <div class="grid">
    <div class="f"><b>Duration window</b><span>${c.profile.duration}</span></div>
    <div class="f"><b>Outcome type</b><span>${c.profile.outcome}</span></div>
    <div class="f"><b>Budget exposure</b><span>${c.profile.budget}</span></div>
    <div class="f"><b>Life stage</b><span>${c.profile.stage}</span></div>
  </div>
  <div class="journey"><b>✈ EF journey match:</b> ${c.journey}</div>
  <div class="bottom"><span>Which nugget are you? 🍗 · ef.com/nugget-traveler</span><b>EF · SCC 2026</b></div>
</div></body></html>`

const lineup = (chars) => `<!doctype html><html><head>${HEAD}</head><body>
<div class="row">${chars
  .map(
    (c) => `<div class="mini" style="background:linear-gradient(168deg, ${c.bg}, #ffffff 58%, ${c.bg});
                 border:2.5px solid ${c.color};">
      <div class="emoji">${c.emoji}</div>
      <div class="title" style="color:${c.color}">${c.title}</div>
      <div class="name">${c.name}</div>
      <div class="lane">${c.journey.split('·')[0].trim()}</div>
    </div>`
  )
  .join('')}</div></body></html>`

const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new' })
const page = await browser.newPage()
await page.setViewport({ width: 900, height: 1400, deviceScaleFactor: 2 })

for (const c of Object.values(CHARACTERS)) {
  await page.setContent(card(c), { waitUntil: 'load' })
  await page.evaluate(() => document.fonts.ready)
  const el = await page.$('.card')
  await el.screenshot({ path: `${OUT}nugget-${c.id}.png`, omitBackground: true })
  console.log('nugget-' + c.id + '.png')
}

await page.setViewport({ width: 2000, height: 420, deviceScaleFactor: 2 })
await page.setContent(lineup(Object.values(CHARACTERS)), { waitUntil: 'load' })
await page.evaluate(() => document.fonts.ready)
const row = await page.$('.row')
await row.screenshot({ path: `${OUT}nugget-lineup.png`, omitBackground: true })
console.log('nugget-lineup.png')

await browser.close()
