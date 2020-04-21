const puppeteer = require('puppeteer');

(async () => {
    try {

      let Url = 'https://coinmarketcal.com/en/pastevents?page=';

      let browser = await puppeteer.launch({
        headless: true
      });

      const page = await browser.newPage();

      const cardDate = [];
      const cardTitle = [];
      const cardValue = [];

      for(let i = 0;i < 3; i++){

        await page.goto(Url + 'i');

        const data = await page.evaluate((cardDate, cardTitle, cardValue) => {
            cardDate = cardDate.concat(Array.from(document.querySelectorAll('.card__date')))
            // const b = Array.from(document.querySelectorAll('.card__title'))
            // const c = Array.from(document.querySelectorAll('.card__coins'))

            cardDate = cardDate.map(item => item.textContent.trim())
            // let b1 = b.map(item => item.textContent.trim())
            // let c1 = c.map(item => item.textContent.trim())

            return{
              // a1,
              // b1,
              // c1
              cardDate
            }
            }, cardDate, cardTitle, cardValue);
            console.log('wypisanie zmiennych ' + data.cardDate);
            console.log('-----------------------------------');
            // for(let c = 0; c < data.a1.length; c++){
            //   console.log(data.a1[c]);
            //   console.log(data.b1[c]);
            //   console.log(data.c1[c]);
            // }
        }

      // const consoleLogs = () => {
        // data events
        // for (let i = 0; i < data.time.length; i++) {
        //   console.log('pozycja ' + i)
        //   console.log('Nazwa kryptowaluty:' + data.nameStock[i])
        //   console.log('Czas wydarzenia:' + data.time[i])
        //   console.log('Nazwa wydarzenia:' + data.title[i])
        //   console.log('---------------------------------------')
        // }
      // }

      // consoleLogs()
      browser.close()

    } catch (error) {
      console.log(error)
    }
})();