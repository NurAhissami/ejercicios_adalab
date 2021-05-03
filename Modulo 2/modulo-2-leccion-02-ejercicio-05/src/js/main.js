'use strict';

const año= 365;
const dia= 24;
const horasDia= año * dia;

console.log(horasDia);

const userAge = document.querySelector('.age');
const totalHours=  horasDia * parseInt(userAge.innerHTML);
userAge.innerHTML = totalHours;

console.log(`te quedan ${totalHours}`);



