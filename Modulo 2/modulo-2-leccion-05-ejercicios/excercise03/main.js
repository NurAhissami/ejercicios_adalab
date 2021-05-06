'use strict'
//Ejercicio 3

const container = document.querySelector ('.one');
const content = '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptatum llo possimus nisi eos commodi necessitatibus, doloremque ipsum quaeratquidem assumenda? Illo ex labore consectetur possimus ipsam laboriosam nventore rem.</p>';

function addNew (){
container.innerHTML += content;
}

container.addEventListener('mouseover', addNew)