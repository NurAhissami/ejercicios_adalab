'use strict'
//Ejercicio 3

const containerColor = document.querySelector('.color-pink');


function changesColor(){
    if (window.scrollY > 250){
        containerColor.classList.add('color-green');
    
    }
    else {
        containerColor.classList.remove('color-green');

    }
}
window.addEventListener ('scroll', changesColor)