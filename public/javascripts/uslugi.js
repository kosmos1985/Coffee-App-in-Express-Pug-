function generatePDF()
{
        const text = document.querySelector('textarea').value;
        console.log(text);
        
        // const fs = require('fs');
        // fs.write('text.pdf', text, (err) =>
        // {
        //     if (err) throw err;
        //     console.log('The file has been saved!');
        // });
    
};

// const puppeteer = require('puppeteer');
// (async () => {
//         const browser = await puppeteer.launch();
//         const page = await browser.newPage();
//         await page.goto('https://example.com');
//         await page.pdf({ path: "text.pdf", format: "A4" });
      
//         await browser.close();
//       })();

