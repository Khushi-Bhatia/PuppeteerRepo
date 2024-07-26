const puppeteer = require("puppeteer");

(async ()=>{
    try{
        const browser = await puppeteer.launch({headless:false});
        const page = await browser.newPage();
        await page.goto('https://yahoo.com');
        const title = await page.title();
        console.log(title);
        const heading = await page.$eval('h1', (element)=>element.textContent);
        console.log(heading);
        await page.screenshot({path: 'index2.png'});
        await browser.close();
    }catch(err){
        console.log(err);
    }
}

)();
