
const result = document.querySelector ('p');



function parImpar (a) {
  if (a %2 === 0){
    return true;
  }
  else{
    return false;
  }
}

result.innerHTML= parImpar(4);