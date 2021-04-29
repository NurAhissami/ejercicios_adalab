'use strict';

const titleElement = document.querySelector('.title');
let listElement= document.querySelector ('.name1');
titleElement.innerHTML = titleElement.innerHTML + listElement[1].innerHTML;
