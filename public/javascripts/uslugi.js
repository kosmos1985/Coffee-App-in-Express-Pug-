function generatePDF()
{
        const text = document.querySelector('textarea').value;
        console.log(text);
        html2pdf()
          .from(text)
          .save();
    
};
