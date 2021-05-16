'use strict'
//Ejercicio 3

const adalaber1={};
adalaber1.name= 'Susana';
adalaber1.age= 34;
adalaber1.proffesion= 'periodista';
adalaber1.showBio = function () {
    return 'Mi nombre es ' + this.name + ' tengo ' + this.age + ' años y soy ' + this.proffesion
        };

const adalaber2={};
adalaber2.name= 'Rocio';
adalaber2.age= 25;
adalaber2.proffesion= 'actriz';
adalaber2.showBio = function () {
    return 'Mi nombre es ' + this.name + ' tengo ' + this.age + ' años y soy ' + this.proffesion
        };

console.log(adalaber1.showBio())
console.log(adalaber2.showBio())