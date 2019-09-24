const puppeteer = require('puppeteer')

async function getPic() {
  console.log('start screenshot!!')

  const brower = await puppeteer.launch({ headless: false })
  const page = await brower.newPage()
  await page.setViewport({ width: 1210, height: 930 })
  await page.goto('https://www.haaretz.com/life/books')
  await page.screenshot({ path: 'books.png' })

  console.log('aleady screenshot!!!')

  await brower.close()
}

getPic()
