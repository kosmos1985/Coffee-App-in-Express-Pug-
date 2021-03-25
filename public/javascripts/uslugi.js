
const text = document.querySelector('textarea');

function saveText()
{
    const { jsPDF }  = require('jspdf');
        const doc = new jsPDF();
        doc.text(text, 10, 10);
        doc.save('text.pdf');
        // const fs = require('fs');
        // // fs.write('text.pdf', text, (err) =>
        // // {
        // //     if (err) throw err;
        // //     console.log('The file has been saved!');
        // // });
    
};

