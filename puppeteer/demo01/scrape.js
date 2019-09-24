const puppeteer = require('puppeteer')

let scrape = async () => {
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()
  // http://books.toscrape.com/
  await page.goto('https://www.uxpin.com/studio/ebooks/')

  // await page.click(
  //   '.image_container img'
  // )
  // await page.waitFor(10000)

  const result = await page.evaluate(() => {
    let data = []
      , elements = document.querySelectorAll('.element-wrapper')
    
    for (let k of elements) {
      let title = k.querySelector('.blue-post-header .action-get-ebook').innerText
      
      console.log('result========>', title)
      data.push({ title })
    }

    
    
    return data
  })

  browser.close()
  return result
}

scrape().then(value => {
  console.log(value)
})
