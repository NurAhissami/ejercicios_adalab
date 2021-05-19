"use strict";

//Ejercicio 10

/* 

*/

const users = [
  { name: "María", isPremium: false, pin: 2389 },
  { name: "Lucía", isPremium: true, pin: 2384 },
  { name: "Susana", isPremium: true, pin: 2837 },
  { name: "Rocío", isPremium: false, pin: 5232 },
  { name: "Inmaculada", isPremium: false, pin: 8998 },
];

const foundUser = users.find((user) => user.pin === 5232);

users.splice(
  users.findIndex((user) => user.pin === 5232),
  1
);

console.log(foundUser);
console.log(users);
