"use strict";

//Ejercicio 2

// Crear una página web con un input donde escribimos el nombre de un personaje ( o parte) y un botón. Al hacer click, nuestra web debe mostrar un listado con los personajes que coinciden con la búsqueda indicando su nombre y género.Al

// 1. Hay que crear una constante que haga referencia al botón y añadirle el addEventListener

// 2. Crear una función findChar ();
//   - Hacer una petición a la API de star wars (fetch()) para que esta le devuelva una información del personaje que hemos buscado.
//     - Crear una constante que recibe el valor del input
//     - Al hacer el fetch utilizaremos el query, el de search "https://swapi.dev/api/people/?search=r2"

//     donde r2 sería el valor de nuestro input.Al
//   - Pintar la información referida al nombre y género del personaje en el li y añadirlo a la lista HTML

const btn = document.querySelector(".js-btn");
btn.addEventListener("click", findChar);

function findChar() {
  const characterSearch = document.querySelector(".character").value;

  fetch(`https://swapi.dev/api/people/?search=${characterSearch}`)
    .then((searchResponse) => searchResponse.json())
    .then((searchData) => {
      const characters = searchData.results;
      const characterList = document.querySelector("ul");
      let characterContent = "";

      for (let i = 0; i < characters.length; i++) {
        const characterName = characters[i].name;
        const characterGender = characters[i].gender;
        console.log(characterGender);
        console.log(characterName);
        characterContent += `<li>Name: ${characterName}  --- Gender: ${characterGender}</li>`;
      }
      console.log(characterContent);
      characterList.innerHTML = characterContent;
    });
}
