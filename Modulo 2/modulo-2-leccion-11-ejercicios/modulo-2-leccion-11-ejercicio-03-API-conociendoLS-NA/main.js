"use strict";

//Ejercicio 4

/*
- Preparar un input de texto para el nombre y párrafo vacío.

- Cada vez que la usuaria escriba su nombre (para esto usaremos un evento con "keyup") tenemos que pintar el valor en el párrafo.

- Guardar ese nombre en el localStorage, y si hay algún nombre guardado, rellenar el input y el párrafo.

1. Primero creamos las variables donde introduciremos el valor.
2. Crearemos una funcion que nos ayudará a imprimir el valor introducido del input. getValue
3. Creamos el evento del input sobre getValue 

4. Creamos otra función que recuperará los datos del localStorage al iniciar la página (al refrescarse)

*/

const input = document.querySelector(".js-name");
const paragraph = document.querySelector(".js-print-name");

function getValue(ev) {
  paragraph.innerHTML = ev.target.value;
  localStorage.setItem("name", ev.target.value);
}

input.addEventListener("keyup", getValue);

function uploadName() {
  const savedName = localStorage.getItem("name");
  input.value = savedName;
  paragraph.innerHTML = savedName;
}
uploadName();

// otra manera más fácil amoldado al ejercicio:
// Cuando el usuario escriba su nombre en el input, guardarlo en el localStorage

// const username = document.querySelector('.name');

// username.addEventListener('keyup', function () {
//   //Pintar en HTML
//   const paragraph = document.querySelector('p');
//   paragraph.innerHTML = username.value;

//   // Guardar en el localstorage
//   localStorage.setItem('name', username.value);
// });
