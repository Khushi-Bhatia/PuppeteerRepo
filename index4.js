const puppeteer = require("puppeteer");

async function run() {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto("https://google.com");

    const images = await page.$$eval("img", (elements) =>
        elements.map((element) => ({
            src: element.src, // corrected from 'srs' to 'src'
            alt: element.alt,
        }))
    );

    const links = await page.$$eval("a", (elements) =>
        elements.map((element) => ({
            href: element.href,
            text: element.textContent,
        }))
    );

    const imageCount = images.length;
    const linkCount = links.length;

    const output = JSON.stringify({ images, links, imageCount, linkCount });
    console.log(output);

    await browser.close();
}

run(); // Call the function
