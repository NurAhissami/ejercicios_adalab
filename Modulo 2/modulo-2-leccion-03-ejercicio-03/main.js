'use strict';

const number = 4;
const condition = document.querySelector('.condition');

if (number < 10){
    condition.innerHTML = 'Estás cerca';
}
else if (number === 10){
    condition.innerHTML = 'Haz acertado';
}
else if (number >=10){
        condition.innerHTML = 'Te has pasado';
}
else{
        condition.innerHTML = 'No es un numero entero'
};
