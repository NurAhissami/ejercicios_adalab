

const clase = "h1"

function getEl (a) {
  if (a === clase){
    return document.querySelector (a)}
  else {
    return console.error(`Hay un error en la clase, se llama ${clase}`);
    }
  }

const title = getEl("a");


title.innerHTML= "Hola";
