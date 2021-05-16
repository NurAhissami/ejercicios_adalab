"use strict";

function getEmoji() {
  fetch("https://api.rand.fun/games/rockpaperscissorslizardspock") // se ejecuta el fetch
    // una función anonima que toma como parametro el resultado de esa promesa en este caso response es la respuesta del servidor

    .then((response) => response.json())
    // devuelve una promesa (se usa THEN) con response es la respuesta que nos promete que estará en el servidor. Se ejecuta json que devuelve otra promesa (trabaja de forma asíncrona y obtiene una respuesta en formato de text)

    .then((data) => {
      document.querySelector(".js-result").innerHTML = data.result;
    });
  // otra función que coge como parametro data que contiene el objeto que devuelve el servidor.
}
document.querySelector(".js-emoji").addEventListener("click", getEmoji);

// Ejecricio 1

function getEmoji() {
  fetch("https://api.rand.fun/number/integer")
    .then((response) => response.json())

    .then((data) => {
      document.querySelector(".js-resultnumber").innerHTML = data.result;
    });
}
document.querySelector(".js-number").addEventListener("click", getEmoji);

//pruebas

function getDogImage() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      const img = document.querySelector("img");
      img.src = data.message;
      img.alt = "Un perro";
    });
}
const btn = document.querySelector(".js-dog");
btn.addEventListener("click", getDogImage);

//Ejercicio 2

function getDogImage() {
  fetch("https://dog.ceo/api/breed/chihuahua/images/random")
    .then((response) => response.json())
    .then((data) => {
      const img = document.querySelector(".chi");
      img.src = data.message;
      img.alt = "Un perro";
    });
}
const chich = document.querySelector(".js-dogchi");
chich.addEventListener("click", getDogImage);

// Ejercicio 3

const endPoint = "https://api.github.com/users/";
const name = document.querySelector(".js-name");
const photo = document.querySelector(".js-photo");
const repo = document.querySelector(".js-repo");

function getUser() {
  name.innerHTML = "";
  const username = document.querySelector(".name").value;

  if (username) {
    fetch(endPoint + username)
      .then((response) => {
        if (response.status >= 200 && response.status < 400)
          return response.json();
        throw new Error("Invalid request " + response.status);
      })

      .then((data) => {
        name.innerHTML = data.name ? data.name : "Not found";
        photo.src = data.avatar_url ? data.avatar_url : "";
        repo.innerHTML = data.public_repos ? data.public_repos : "";
      })
      .catch((error) => console.error(error));
  }
}
document.querySelector(".js-get").addEventListener("click", getUser);
