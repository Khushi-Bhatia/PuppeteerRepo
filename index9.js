const puppeteer = require("puppeteer");
const fs = require("fs");

async function getSourceCode(url,outputData){
    try{
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        await page.goto(url);
        const sourceCode = await page.content();
        fs.writeFileSync(outputData,sourceCode,"utf-8");
        await browser.close();
        console.log("Success!!");
    }catch(err){
        console.log("Error Occured!");
    }
}


const url = "https://google.com";
const outputData = "source_code.html";

getSourceCode(url,outputData);