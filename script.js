let string = "";

let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHMTL == '=') {
            string = eval(string);  
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHMTL == 'AC') {
            string = "";  
            document.querySelector('input').value = string;
        }
        else{
            console.log(e.target);
            string = string + e.target.innerHMTL;
            document.querySelector('input').value = string;
        }

    })
})