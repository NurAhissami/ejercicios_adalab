'use strict';

const age = 10;
const condition = document.querySelector('.condition');
const total = age *5;

if (age === 1){
    condition.innerHTML = 'tu perro tiene 15 años humanos';
}
else if (age <= 2){
    condition.innerHTML = 'tu perro tiene 9 años humanos';
}
else if (age >=3){
        condition.innerHTML = `tu perro tiene ${total}` ;
}

