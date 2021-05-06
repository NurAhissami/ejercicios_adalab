

const clase = ".title"

function getEl (a) {
  if (a === clase){
    return document.querySelector (a)
  }
  else if (a[0]!== '.'){
      return console.error(`QUE TE HAS OLVIDADO DEL PUNTO,  ${clase}`);
    }
  else {
    return console.error(`Hay un error en la clase, se llama ${clase}`);
    }
  }

const title = getEl("title");


title.innerHTML= "Hola";
