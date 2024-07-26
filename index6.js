// const puppeteer = require("puppeteer")

// async function generatePDF(url,outputfile){
//     try{
//         const browser = await puppeteer.launch({headless:false});
//         const page = await browser.newPage();

//         await page.goto(url);
//         await page.pdf({path:outputfile,format:'A4'});
//         await browser.close();

//     }catch(err){
//         console.log(err);
//     }

// }

// const url = "http://google.com";
// const outputfile = "index6.pdf";

// generatePDF(url,outputfile);



const puppeteer = require("puppeteer");
const fs = require("fs");

async function generatePDF() {
    let browser;
    try {
        browser = await puppeteer.launch({ headless: true }); // Ensure headless mode
        const page = await browser.newPage();

        // Define the maximum number of retries
        const maxRetries = 3;
        
        let attempts = 0;
        let success = false;

        while (attempts < maxRetries && !success) {
            try {
                await page.goto("https://google.com", { waitUntil: 'networkidle2', timeout: 60000 });
                success = true; // Mark as successful if no error
            } catch (error) {
                attempts++;
                console.error(`Attempt ${attempts} failed: ${error.message}`);
                if (attempts >= maxRetries) throw error; // Rethrow error if max retries reached
            }
        }

        const pdfBuffer = await page.pdf({
            format: 'A4',
            printBackground: true
        });

        fs.writeFileSync('output.pdf', pdfBuffer);

        console.log('PDF generated successfully.');
    } catch (error) {
        console.error('Error generating PDF:', error);
    } finally {
        if (browser) {
            await browser.close();
        }
    }
}

generatePDF();
