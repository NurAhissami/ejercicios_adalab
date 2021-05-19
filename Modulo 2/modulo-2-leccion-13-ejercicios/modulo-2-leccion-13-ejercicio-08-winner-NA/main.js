"use strict";

//Ejercicio 8

/* 

*/

const runners = [
  { name: "Gregory Goyle", time: 56 },
  { name: "Nymphadora Tonks", time: 9 },
  { name: "Luna Lovegood", time: 45 },
  { name: "Cedric Diggory", time: 28 },
  { name: "Cho Chang", time: 35 },
];

const winner = runners.reduce((acc, runner) => {
  return acc.time < runner.time ? acc : runner;
});

console.log(winner);
