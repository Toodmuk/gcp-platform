// Mobile-viewport screenshots via CDP emulation (real 390px layout).
import puppeteer from 'puppeteer-core'

const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe'
const OUT = '../mobile-shots/'
const BASE = process.argv[2] || 'http://localhost:5199'
const ROUTES = [
  ['m-home', '/'],
  ['m-quiz', '/quiz'],
  ['m-q3', '/quiz?q=2'],
  ['m-result', '/quiz/result/golden'],
  ['m-passport', '/passport'],
  ['m-verify', '/verify/GCP-TH-2026-000117'],
  ['m-transcript', '/transcript'],
  ['m-community', '/community'],
]

const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new' })
const page = await browser.newPage()
await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true })

for (const [name, route] of ROUTES) {
  await page.goto(BASE + route, { waitUntil: 'networkidle0', timeout: 30000 })
  await new Promise((r) => setTimeout(r, 600))
  await page.screenshot({ path: OUT + name + '.png' })
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth - document.documentElement.clientWidth
  )
  console.log(name, 'overflow-x:', overflow + 'px')
}
await browser.close()
