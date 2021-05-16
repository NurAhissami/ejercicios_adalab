"use strict";

//Ejercicio 1

// crear una funcion

//  con un array dentro, creamos uno vacio

// para escribir los numeros del 1 al 100 podemos utilizar un blucle que de 100 vueltas, y que por cada vuelta, guarde el numero de la vuelta en un array con un push

// ejecutar la funcion en un console.log

// usar un bucle for.  Para contar del 1 al 100 y no del 0 al 99 podemos hacer:  ( let i = 1; i < 101  ) o (numbers.push(i+1))

let arr = [];

function get100Numbers() {
  for (let i = 0; i < 100; i++) {
    arr.push(i + 1);
    console.log(arr[i]);
  }
  console.log(arr[49]);
}

get100Numbers();
function get100Numbers2(list) {
  console.log(list);
}

get100Numbers2(arr);
//Ejercicio 2

function getReversed100Numbers() {
  // get100Numbers();
  console.log(arr.reverse());
}

getReversed100Numbers();

// console.log(arr.length)

//Ejercicio 3

/*
1. crear array lostNumber
2. crear un array vacío (paresNumber)
3. recorrer el array lostNumbers para encontrar los pares 
4. meterlo en el nuevo array

*/

const lostNumbers = [4, 8, 15, 16, 23, 42];

let multNumbers = [];

// function bestLostNomber(){
//     let paresNumbers = [];
//     lostNumbers.forEach(element => {
//     if (element % 2 == 0) {
//         paresNumbers.push(element)
//     }
// });
// console.log(paresNumbers)
// }

// bestLostNomber()

// Lo que contiene el for son lineas de código que se repiten según la condición.

const bestLostNomber = (numberArr, n) => {
  if (!Array.isArray(numberArr)) return [];
  if (!n) n = 2;
  let paresNumbers = [];
  for (let i = 0; i < numberArr.length; i++) {
    if (numberArr[i] % n == 0) {
      paresNumbers.push(numberArr[i]);
    }
  }

  // console.log(paresNumbers);
  return paresNumbers;
  // return;
};

const myfn = () => 5;

const five = myfn();

let V = 5;

const paresN = bestLostNomber(lostNumbers);
console.log(paresN);
const thirdN = bestLostNomber(lostNumbers, 3);
console.log(thirdN);
const invalid = bestLostNomber();
console.log(invalid);

//

lostNumbers.forEach((element) => {
  if (element % 3 == 0) {
    multNumbers.push(element);
  }
});
// const mn = lostNumbers.filter(n => n % 3 === 0)

// const concatNumbers= paresNumbers.concat(multNumbers)

// console.log(paresNumbers)
// console.log(multNumbers)
// console.log(concatNumbers)

// let anotherNumber =[];

// for(let i = 0; i < paresNumbers.length; i++){
//     for (let j= 0; j < multNumbers.length; j++){
//         if (paresNumbers[i] == multNumbers[j])
//             anotherNumber.push(paresNumbers[i])
//     }
// }

// console.log(anotherNumber)

//Ejercicio 4

/* 
Proceso 1

 - Cuando arranque la página debo pintar el listado de tareas.
 - Escuchar un evento sobre las tareas pintadas.

Proceso 2 (una vez la usuaria a pinchado la tarea)

 - Recoger en cual elemento ha hecho click.
 - Modifico los datos (estado de la tarea)
 - Hay que repintar las tareas.
 - Escuchar un evento

 */

// const ulList = document.querySelector('.js-list');

//  const tasks = [
//     { name: 'Recoger setas en el campo', completed: true },
//     { name: 'Comprar pilas', completed: true },
//     { name: 'Poner una lavadora de blancos', completed: true },
//     {
//       name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
//       completed: false
//     }
//   ];

//   function paintTask (){
//       for (let i=0; i < tasks.length; i++){
//           let task = task[i]
//           html+=`<li>`
//           html+=`<input type="checkbox" value="${i}/>`;
//           html+= `${task.name} </li>`;
//       }
//   }
