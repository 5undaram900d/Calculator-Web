

let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for(item of buttons){
    item.addEventListener('click', (e) =>{
        buttonText = e.target.innerText;        /* this gives the button text which is written inside it */
        console.log('Botton text is: ', buttonText);
        if(buttonText == 'x'){
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if(buttonText == 'C'){
            screenValue = "";
            screen.value = screenValue;
        }
        else if(buttonText == '='){
            screen.value = eval(screenValue);    /* eval is the function which is evaluating the value */
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    });
}