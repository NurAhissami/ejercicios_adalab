"use strict";

//Ejercicio 2

/* 

*/

const citySelect = document.querySelector("#city-select");
const imageContainer = document.querySelector(".js-image");

const newItem = document.createElement("img");

imageContainer.appendChild(newItem);

function imageCity() {
  if (citySelect.value === "madrid") {
    newItem.src = "./images/madrid.jpg";
  } else if (citySelect.value === "paris") {
    newItem.src = "./images/paris.jpg";
  } else if (citySelect.value === "newYork") {
    newItem.src = "./images/newyork.jpg";
  }
}

citySelect.addEventListener("change", imageCity);
