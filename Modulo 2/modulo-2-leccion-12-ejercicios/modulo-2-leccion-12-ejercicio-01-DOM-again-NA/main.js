"use strict";

//Ejercicio 1

/* 
HTML
Creamos una lista vacía en html (ul)

JAVASCRIPT
- Crear un array con 3 elementos [1,2,3]
-Añadir a la lista los tres elementos dentro de una li

*/

const arr = [1, 2, 3];

// Hay que hacer un bucle /loop que por cada elemento del array cree un elemento 'li' y un textNode con el elemento del array como contenido.

for (let i = 0; i < arr.length; i++) {
  //llamamos a nuestra ul del HTML
  const list = document.querySelector(".js-list");

  //Creamos el elemento li
  const newItems = document.createElement("li");

  //Creamos el contenido de nuestro nuevo elemento, cuyo valor es el elemento del array.
  const newContents = document.createTextNode(arr[i]);

  //Añadimos este contenido al elemento creado
  newItems.appendChild(newContents);

  //Añadimos el elemento creado a nuestra ul
  list.appendChild(newItems);
}
