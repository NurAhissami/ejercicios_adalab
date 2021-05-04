'use strict';

// avatar por defecto
const DEFAULT_AVATAR = 'http://placehold.it/300x300';
// avatar que eligió el usuario al registrarse
let userAvatar = '';

const avatar = document.querySelector('.image');
const content = `<img src="${DEFAULT_AVATAR}"></img>`;
avatar.innerHTML= content;
let finalimage = (userAvatar || DEFAULT_AVATAR);

avatar.innerHTML=  `<img src="${finalimage}"></img>`;