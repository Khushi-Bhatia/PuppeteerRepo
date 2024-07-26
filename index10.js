// const puppeteer = require("puppeteer");

// async function enterFormData(url,searchQuery){
//     try{

//         const browser =  await puppeteer.launch({headless:false});
//         const page = await browser.newPage();

//         await page.goto(url);
//         await page.focus('input[name="p"]');
//         await page.keyboard.type(searchQuery);
//         await page.keyboard.press('Enter');
//         await page.waitForNavigation({waitUntil:'networkidle2'});
//         await page.screenshot({path:'query-results.png'});
//         await browser.close();
//         console.log("form Data submitted successfully");

//     }catch(error){
//         console.log(error);
//     }
// }

// const url = 'https://yahoo.com';
// const searchQuery = "sunrise";

// enterFormData(url,searchQuery);

const puppeteer = require("puppeteer");

async function enterFormData(url, searchQuery) {
    try {
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();

        await page.setDefaultNavigationTimeout(200000); // Increase the default navigation timeout

        console.log("Navigating to URL...");
        await page.goto(url, { waitUntil: 'load' });

        // Wait for the search input element to be present
        console.log("Waiting for search input to be visible...");
        await page.waitForSelector('input[name="p"]', { visible: true });

        console.log("Typing search query...");
        await page.focus('input[name="p"]');
        await page.keyboard.type(searchQuery);
        await page.keyboard.press('Enter');

        // Wait for the search results to appear
        console.log("Waiting for search results...");
        await page.waitForSelector('#web', { visible: true, timeout: 200000 });

        console.log("Taking screenshot...");
        await page.screenshot({ path: 'query-results.png' });

        await browser.close();
        console.log("Form data submitted successfully");

    } catch (error) {
        console.error("Error submitting form data:", error);
    }
}

const url = 'https://yahoo.com';
const searchQuery = "sunrise";

enterFormData(url, searchQuery);
