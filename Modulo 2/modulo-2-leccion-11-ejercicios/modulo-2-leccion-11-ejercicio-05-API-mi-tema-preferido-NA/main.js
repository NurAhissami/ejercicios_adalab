"use strict";

//Ejercicio 5

/*
 - Cuando la usuaria elija una opción, hay que cambiar la clase del container y guardar la  en el localStorage. - 

1- Para esto habrá que guardar primero los inputs en un array (se pueden crear dos constantes)

2- Añadir event listener a los DOS radio buttons, para eso hago un loop y le aplico a los dos el eventlistener

3- Crear la función handler changeTheme. Como se le aplica a los dos botones, se le pone el event para poder diferenciar sobre qué botón hemos pinchado

4- Guardar en el localStorage: Para saber qué value tenemos que coger, voy a hacer un loop ( también se puede hacer con un condicional if ... else)
*/

// Voy a guardar los inputs en un array (también se puede hacer una constante por cada una)

const radioButtons = document.querySelectorAll(".radiobtn");
const container = document.querySelector(".container");

// Añadir event listener a los DOS radio buttons

for (const button of radioButtons) {
  button.addEventListener("change", changeTheme);
}

// Creo la función handler changeTheme. Como se le aplica a los dos botones, le pongo el event para poder diferenciar cual hemos clickeado

function changeTheme(event) {
  if (event.target === radioButtons[0]) {
    container.classList.add("light");
    container.classList.remove("dark");
  } else if (event.target === radioButtons[1]) {
    container.classList.add("dark");
    container.classList.remove("light");
  }

  // Guardar en el localStorage:

  for (const button of radioButtons) {
    if (button.checked) {
      localStorage.setItem("colorTheme", button.value);
    }
  }
}
