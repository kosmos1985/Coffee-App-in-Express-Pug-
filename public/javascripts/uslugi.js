import { writeFile } from 'fs';

function saveText()
{
    if (document.querySelector('textarea') !== null)
    {
        const text = document.querySelector('textarea').value;
        console.log(text);
        writeFile('text.pdf', text, (err) =>
        {
            if (err) throw err;
            console.log('The file has been saved!');
        });
    };
};
