
const result = document.querySelector ('p');



function parImpar (a) {
  if (a %2 === 0){
    return "True";
  }
  else{
    return "False";
  }
}

result.innerHTML= parImpar(4);