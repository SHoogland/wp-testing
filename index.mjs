import puppeteer from 'puppeteer-core'

(async () => {
	const browser = await puppeteer.launch({executablePath: process.env.CHROME_BIN})
	const page = await browser.newPage()
	await page.goto('http://localhost', {waitUntil: 'networkidle2'})
	let content = await page.content()
	console.log(content)

	await browser.close()
})()