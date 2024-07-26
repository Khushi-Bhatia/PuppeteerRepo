const puppeteer = require("puppeteer");
const fs = require("fs");

async function run() {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto("https://yahoo.com");

    const title = await page.title();
    const metaDescription = await page.$eval('meta[name="description"]', (element) => element.getAttribute('content'));
    const metaKeywords = await page.$eval('meta[name="keywords"]', (element) => element.getAttribute('content'));

    const links = await page.$$eval("a", (elements) => 
        elements.map((element) => ({
            href: element.href,
            text: element.textContent.trim()
        }))
    );

    const images = await page.$$eval("img", (elements) =>
        elements.map((element) => ({
            src: element.src,
            alt: element.alt
        }))
    );

    const imageCount = images.length;
    const linkCount = links.length;

    const outputData = {
        title,
        metaDescription,
        metaKeywords,
        images,
        links,
        imageCount,
        linkCount
    };

    const outputJSON = JSON.stringify(outputData, null, 2);

    fs.writeFileSync("output.json", outputJSON);

    await browser.close();
}

run(); // Call the function
