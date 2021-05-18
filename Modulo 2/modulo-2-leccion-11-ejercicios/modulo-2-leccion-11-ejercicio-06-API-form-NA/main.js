"use strict";

//Ejercicio 6

// Partimos del ejercicio 4 y queremos añadir un campo más para el apellido (hecho en el html) y gurdar los datos a modo de objeto en el localStorage

// Recuerda que localSotrage NO puede guardar arrays ni objetos
// Tenemos que utilizar el método JSON.stringify para convertir un objeto o array
// en una cadena string.

//constantes para la referencia de los inputs
const userName = document.querySelector(".js-name");
const lastName = document.querySelector(".js-last-name");

const paragraph = document.querySelector(".js-print-name");

// se crea un evento que escucha cuando estamos tecleando en el documento, como función pintamos en el html el valor de useName y lastName

document.addEventListener("keyup", function () {
  paragraph.innerHTML = userName.value + " " + lastName.value;

  //Creeamos un objeto con los datos
  const userInfo = {
    name: userName.value,
    lastName: lastName.value,
  };

  localStorage.setItem("userInfo", JSON.stringify(userInfo));
});
