"use strict";

//Ejercicio 3

/* 

*/
const users = [
  { name: "María", isPremium: false },
  { name: "Lucía", isPremium: true },
  { name: "Susana", isPremium: true },
  { name: "Rocío", isPremium: false },
  { name: "Inmaculada", isPremium: false },
];

const premiumUser = users.map((user) => {
  if (user.isPremium === false) {
    return `Bienvenida ${user.name}`;
  } else if (user.isPremium === true) {
    return `Bienvenida ${user.name}. Gracias por confiar en nosotros.`;
  }
});

console.log(premiumUser[1]);
