"use strict";

//Ejercicio 3

/* 

*/

const infoSelect = [
  {
    name: "Nur",
    surname: "Ahissami",
    phone: 692699597,
  },
  {
    name: "Blanca",
    surname: "Ruiz",
    phone: 692699227,
  },
  {
    name: "Arig",
    surname: "Ahissami",
    phone: 23699227,
  },
];

const inputName = document.querySelector("#name");
const inputSurname = document.querySelector("#surname");
const inputPhone = document.querySelector("#phone");

const select = document.querySelector(".js-select");

// Hacer una función en la que se encargue de rellenarnos el formulario. si el value del select es igual a x / el input.value sera igual al array [x]

function fill() {
  if (select.value === "nur") {
    inputName.value = infoSelect[0].name;
    inputSurname.value = infoSelect[0].surname;
    inputPhone.value = infoSelect[0].phone;
  } else if (select.value === "blanca") {
    inputName.value = infoSelect[1].name;
    inputSurname.value = infoSelect[1].surname;
    inputPhone.value = infoSelect[1].phone;
  } else if (select.value === "arig") {
    inputName.value = infoSelect[2].name;
    inputSurname.value = infoSelect[2].surname;
    inputPhone.value = infoSelect[2].phone;
  }
}

select.addEventListener("change", fill);
