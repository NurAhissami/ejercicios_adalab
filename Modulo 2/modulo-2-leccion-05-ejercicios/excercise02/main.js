'use strict'
//Ejercicio 2

const buttonName = document.querySelector ('.js-button-name');
const textHi = document.querySelector('.hola');




console.log(buttonName);
console.log(textHi)

function helloNur (){
const input = document.querySelector ('.js-input').value;
textHi.innerHTML= `Hola ${input}`;
}

buttonName.addEventListener('click', helloNur);


