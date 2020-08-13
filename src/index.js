const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://instagram.com/rocketseat_oficial');

  const imgList = await page.evaluate(() => {
    // Toda essa função será executada no browser
    // Pegando todas as imagens que estão na parte dos posts
    const nodeList = document.querySelectorAll('article img');

    // Transformando o NodeList em array
    const imgArray = [...nodeList];

    // Transformando os nodes (elementos HTML) em objetos JS
    const imgList = imgArray.map(({ src }) => ({
      src,
    }));

    return imgList;
  });

  // Escrevendo os dados em um arquivo local (JSON)
  fs.writeFile('instagram.json', JSON.stringify(imgList, null, 2), err => {
    if (err) {
      throw new Error('Something went wrong!');
    }

    console.log('Well done!');
  });

  await browser.close();
})();