'use strict'
//Ejercicio 2

const buttonName = document.querySelector ('.js-button-name');
const textHi = document.querySelector('.hola');
const input = document.querySelector ('.js-input').value;



console.log(buttonName);
console.log(textHi)

function helloNur (){
// textHi.innerHTML = (`Hola ${inputValue}`)
textHi.innerHTML = (`Hola ${input}`);
}

buttonName.addEventListener('click', helloNur);


