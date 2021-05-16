'use strict'

console.log("todo va genial!")

const faceSelect = document.querySelector('.js-select');
const face = document.querySelector('.happyface');
const button = document.querySelector ('.js-button')
const mainColor = document.querySelector('.main-color1')


function refreshFace(){
    const selectedFace = faceSelect.value;
    if (selectedFace === 'happy'){
    face.innerHTML = ":)";
    }
else {
    face.innerHTML = ":(";

}
}

function generateRandomNumber(){
    //0 ..100
    const number = Math.round(Math.random()*100);
    return number;
}

const removeBackgroundClass = () =>{
mainColor.classList.remove('main-color1')
mainColor.classList.remove('main-color2')

}

const setNewBackground = (randomNumber) =>{ 

    if(randomNumber % 2 === 0){
        mainColor.classList.add('main-color1')
    }
    else {
        mainColor.classList.add ('main-color2')
    }

    }
function  {
    removeBackgroundClass();

     setNewBackground (number);
}

function refreshBackground(){

    const number = generateRandomNumber();

    removeBackgroundClass();

     setNewBackground (number);

}

function handleClickButton(){
    refreshFace();
    refreshBackground();
}

button.addEventListener('click', handleClickButton)

console.log('Hasta aquí todo va bien')