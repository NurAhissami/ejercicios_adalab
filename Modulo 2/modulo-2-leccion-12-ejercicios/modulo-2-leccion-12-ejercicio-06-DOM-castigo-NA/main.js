"use strict";

/* EJERCICIO 6 */
const container = document.querySelector(".js-container");

let contentSelect = '<select name="color"  class="select-color">';
contentSelect += '<option value="blanco" class="js-color">Blanco</option>';
contentSelect += '<option value="azul" class="js-color">Azul</option>';
contentSelect += '<option value="verde" class="js-color">Verde</option>';
contentSelect += '<option value="amarillo" class="js-color">Amarillo</option>';
contentSelect += '<option value="rosa" class="js-color">Rosa</option>';
contentSelect += "</select>";

container.innerHTML = contentSelect;

function copy100() {
  let content = `<li>`;
  for (let i = 0; i < 100; i++) {
    content += `<p class="text"> He aprendido bien cómo funcionan los bucles ${contentSelect}</p>`;
  }
  content += `</li>`;
  container.innerHTML = content;
}
copy100();

const selects = document.querySelectorAll(".select-color");
const options = document.querySelectorAll(".js-color");
const body = document.querySelector("#body");
options[0].selected = true;

function changeColor(ev) {
  if (ev.target.value === "blanco") {
    ev.target.parentElement.style.color = "white";
  } else if (ev.target.value === "azul") {
    ev.target.parentElement.style.color = "blue";
  } else if (ev.target.value === "verde") {
    ev.target.parentElement.style.color = "green";
  } else if (ev.target.value === "amarillo") {
    ev.target.parentElement.style.color = "yellow";
  } else if (ev.target.value === "rosa") {
    ev.target.parentElement.style.color = "pink";
  }
}

selects.forEach((element) => element.addEventListener("change", changeColor));
