'use strict';

const name = 'Nur';
const welcome = document.querySelector('.js-welcome');

if (name === 'Nur'){
    welcome.innerHTML+= ` Bienvenida ${name}`;} 
else{
    welcome.innerHTML+= 'Usuario no registrado';}

