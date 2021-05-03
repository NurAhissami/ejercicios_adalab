'use strict';

const titleH1 = document.querySelector ('h1');
const name = 'Silvia';
const surname = 'España';

const content = `El nombre de mi compañera es ${name} ${surname}, y está compuesto por ${name.length + surname.length} caracteres`;
titleH1.innerHTML= content;



