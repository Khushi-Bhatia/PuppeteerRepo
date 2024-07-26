// const puppeteer = require("puppeteer");

// async function captureAndGeneratePDF(url,outputPath){
//     try{
//         const browser = await puppeteer.launch({headless:false});
//         const page = await browser.newPage();

//         await page.goto(url);
//         await page.screenshot({path:'ss-8.png'});
//         await page.pdf({path:outputPath,format:'A4'});
//         await browser.close();
//         console.log("Screenshot and pdf generated successfully");


//     }catch(err){
//         console.log("Unable to generat screenshots");
//     }
// }

// const url = "https://google.com";
// const outputPath = "google-screenshot-8.pdf";
// captureAndGeneratePDF(url,outputPath);


// const puppeteer = require("puppeteer");

// async function captureAndGeneratePDF(url, outputPath) {
//     try {
//         const browser = await puppeteer.launch({ headless: false });
//         const page = await browser.newPage();

//         await page.goto(url, { waitUntil: 'networkidle2' }); // Wait until the network is idle
//         await page.screenshot({ path: 'ss-8.png' });
//         await page.pdf({ path: outputPath, format: 'A4' });
//         await browser.close();
//         console.log("Screenshot and PDF generated successfully");
//     } catch (err) {
//         console.error("Unable to generate screenshots:", err);
//     }
// }

// const url = "https://google.com";
// const outputPath = "google-screenshot-8.pdf";
// captureAndGeneratePDF(url, outputPath);


const puppeteer = require("puppeteer");

async function captureAndGeneratePDF(url, outputPath) {
    try {
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();

        // Set the default navigation timeout to 60 seconds
        await page.setDefaultNavigationTimeout(60000);

        await page.goto(url, { waitUntil: 'networkidle2' });
        await page.screenshot({ path: 'ss-8.png' });
        await page.pdf({ path: outputPath, format: 'A4' });
        await browser.close();
        console.log("Screenshot and PDF generated successfully");
    } catch (err) {
        console.error("Unable to generate screenshots:", err);
    }
}

const url = "https://google.com";
const outputPath = "google-screenshot-8.pdf";
captureAndGeneratePDF(url, outputPath);


