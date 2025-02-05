const puppeteer = require("puppeteer");

async function generateScreenshot(url,outputPath){
    try{
        const browser = await puppeteer.launch({headless:false});
        const page = await browser.newPage();

        await page.goto("https://google.com");
        await page.screenshot({path:outputPath});
        await browser.close();
        console.log("Screenshot generated successfully");


    }catch(err){
        console.log("Unable to generat screenshots");
    }
}

const url = "https://google.com";
const outputPath = "google-screenshot.png";
generateScreenshot(url,outputPath);