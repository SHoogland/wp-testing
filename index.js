const puppeteer = require('puppeteer-core');

(async () => {
	const browser = await puppeteer.launch({executablePath: process.env.CHROME_BIN})
	const page = await browser.newPage()
	await page.goto('http://localhost:8888', {waitUntil: 'networkidle2'})
	await page.screenshot({path: 'screenshot.png'});
	await browser.close()
})()