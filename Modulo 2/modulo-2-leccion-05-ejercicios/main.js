'use strict'
//Ejercicio 5
const container = document.querySelector ("body")

 function color (event){

     if (event.key === "r" || event.key === "R"){
        container.classList.remove("color-green")

        container.classList.add('color-pink');
     }
  if (event.key === "m" || event.key === "M"){
    container.classList.remove("color-pink")

         container.classList.add('color-green')

     }
console.log(event)
 }

container.addEventListener('keydown', color)
container.addEventListener('keydown', color)

// function colorGreen (event){

//     if (event.key === "m" || event.key === "M"){
//        container.classList.add('color-green');
//        container.EventListener('keydown', colorGreen);

//     }
// }

// function colorPink (event){

//     if (event.key === "r" || event.key === "R"){
//        container.classList.add('color-pink');
//        container.removeEventListener('keydown', colorPink);

//     }
// }


// container.addEventListener('keydown', colorGreen);
// container.addEventListener('keydown', colorPink);
