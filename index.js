const puppeteer = require('puppeteer-core');

(async () => {
	const browser = await puppeteer.launch({executablePath: process.env.CHROME_BIN})
	const page = await browser.newPage()
	await page.goto('http://localhost:8888', {waitUntil: 'networkidle2'})
	await page.screenshot({path: 'screenshots/screenshot.png'});
	await page.goto('http://localhost:8888/wp-admin', {waitUntil: 'networkidle2'})
	await page.screenshot({path: 'screenshots/screenshot2.png'});
	await browser.close()
})()