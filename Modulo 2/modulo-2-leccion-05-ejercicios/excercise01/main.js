'use strick'
//HTML

const button = document.querySelector(".js-button");
const text = document.querySelector('.js-text');


//Handler

function firstClick(){
text.innerHTML = 'Mi primer click, ¡Ole yo y la mujer que me parió'
}

//Listener
button.addEventListener('click', firstClick);

//Ejercicio 2

const buttonName = document.querySelector ('.js-button-name');
const textHi = document.querySelector('.js-text-hi');
const input = document.querySelector ('.js-input');
const inputValue = "input.Value";

function helloNur (){
// textHi.innerHTML = (`Hola ${inputValue}`)
console.log('Hola')
}

buttonName.addEventListener('click', helloNur );
