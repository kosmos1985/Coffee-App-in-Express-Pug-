//function to change background-color under Expres image
function changeBackgroundColor()
{
    if (document.querySelector('input') !== null)
    {
        const text = document.querySelector('input').value;
        const div1 = document.querySelector('#ex1');
        const div2 = document.querySelector('#ex2');
        const div3 = document.querySelector('#ex3');
        const div4 = document.querySelector('#ex4');
        const title1 = document.querySelector('#title1').textContent;
        const title2 = document.querySelector('#title2').textContent;
        const title3 = document.querySelector('#title3').textContent;
        const title4 = document.querySelector('#title4').textContent;
  
        if (text.trim() === title1.trim())
        {
            div1.setAttribute("style", "background-color:red");
        }else 
        {
            div1.removeAttribute("style");
        };

        if (text.trim() === title2.trim())
        {
            div2.setAttribute("style", "background-color:green");
        }else 
        {
            div2.removeAttribute("style");   
        };

        if (text.trim() === title3.trim())
        {
            div3.setAttribute("style", "background-color:gray");
        }else 
        {
            div3.removeAttribute("style");  
        };

        if (text.trim() === title4.trim())
        {
            div4.setAttribute("style", "background-color:yellow");
        }else 
        {
            div4.removeAttribute("style");   
        };
        
    }
};