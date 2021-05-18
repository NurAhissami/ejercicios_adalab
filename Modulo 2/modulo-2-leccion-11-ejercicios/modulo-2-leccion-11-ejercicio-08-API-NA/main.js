"use strict";

//Ejercicio 8

// Partimos del ejercicio 2 y se nos pide que cacheemos (guardemos a nivel local) las búsquedas al servidor para que cuando busquemos en el input un personaje de star wars, primero busque en el localStorage

//creamos nuestra constante y el evento
const btn = document.querySelector(".js-btn");
btn.addEventListener("click", findCharacter);

// Creamos nuestra función
function findCharacter() {
  const characterSearch = document.querySelector(".character").value;

  //  Lo que tenemos que comprobar : ¿ el valor introducido en el input coincide con alguna de las keys que tenemos en el localStorage ?

  if (localStorage.getItem(characterSearch)) {
    console.log("No se realiza petición al servidor");

    //al ser un string tendremos que pasarlo a objeto!
    const characters = JSON.parse(localStorage.getItem(characterSearch));

    paintCharacters(characters);

    // Sino se puede coger, esto nos da falsy y pasaríamos a hacer la petición al servidor.
  } else {
    console.log("Se realiza petición al servidor");
    fetch(`https://swapi.dev/api/people/?search=${characterSearch}`)
      .then((searchResponse) => searchResponse.json())
      .then((searchData) => {
        const characters = searchData.results;
        paintCharacters(characters);

        //Hay que guardarlo en el localStorage, y como es un objeto, hay que pasarlo a string
        localStorage.setItem(characterSearch, JSON.stringify(characters));
      });
  }

  function paintCharacters(characters) {
    const characterList = document.querySelector("ul");
    let characterContent = "";

    for (let i = 0; i < characters.length; i++) {
      const characterName = characters[i].name;
      const characterGender = characters[i].gender;
      characterContent += `<li>Name: ${characterName}  --- Gender: ${characterGender}</li>`;
    }

    characterList.innerHTML = characterContent;
  }
}
