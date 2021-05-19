"use strict";

//Ejercicio 7

/* 

*/
const times = [56, 9, 45, 28, 35];

const mediaTimes = times.reduce((acc, time) => acc + time, 0) / times.length;

console.log(mediaTimes);
