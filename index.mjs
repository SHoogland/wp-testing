import puppeteer from 'puppeteer-core'

(async () => {
	const browser = await puppeteer.launch({executablePath: process.env.CHROME_BIN})
	const page = await browser.newPage()
	await page.goto('http://localhost', {waitUntil: 'networkidle2'})
	await page.screenshot({path: 'screenshot.png'});
	await browser.close()
})()