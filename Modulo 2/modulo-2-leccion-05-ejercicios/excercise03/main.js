'use strict'
//Ejercicio 3

const container = document.querySelector ('.one');
const content = '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptatum llo possimus nisi eos commodi necessitatibus, doloremque ipsum quaeratquidem assumenda? Illo ex labore consectetur possimus ipsam laboriosam nventore rem.</p>';

var counter = 0;
var items = 4;

// classList.toggle() 
// var visible = true
// visible = !visible

// if  (classList.hasClass('myclass')) {
//     classList.remove('myclass')
// } else {
//     classList.add('myclass')
// }

function addNew (){
container.innerHTML += content;
container.style.color = "red";

console.log('hola')
}


function addOnce() {
addNew();
container.removeEventListener('mouseover', addOnce)
}

function addMany(total) {
    addNew();
    counter = counter + 1;
    if (counter === total) {
        container.removeEventListener('mouseover', eventHandler)
    }
}

function eventHandler(event) {
    console.log(event)
    addMany(items);
} 
 


container.addEventListener('mouseover', eventHandler)

eventHandler(e)

function handler(event) {
    if (event.keycode === 50 ) {
        doSomenthing()
        // ago algo con la j
    }

    if (event.keycode === 89 ) {
        // ago algo con la u
    } 
}

container.addEventListener('keyup', handler)
