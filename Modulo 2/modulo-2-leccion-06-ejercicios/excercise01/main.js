'use strick'
//HTML

const resultAdal = document.querySelector ('.js-parr')

const adalaber1 ={
    name:'Susana',
    age: 34,
    proffesion: 'periodista'
};

const adalaber2 ={
    name:'Rocio',
    age: 25,
    proffesion: 'actriz'
};

resultAdal.innerHTML = `Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} años y soy ${adalaber1.proffesion}`

resultAdal.innerHTML += `Mi nombre es ${adalaber2.name}, tengo ${adalaber2.age} años y soy ${adalaber2.proffesion}`


adalaber1.run = phrase => `Estoy ${phrase}`;
console.log(adalaber1.run('corriendo'));

adalaber1.runAMarathon = distance => `un maratón de ${distance} kilometros`;

console.log(adalaber1.run('corriendo')+adalaber1.runAMarathon(50));


