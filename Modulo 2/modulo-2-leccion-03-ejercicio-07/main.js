
const recipe = document.querySelector ('p');


let ingredient = '';

switch (ingredient) {
  case 'NoPollo':
    recipe.innerHTML=  'Compra Heura y deja el pollo que viva feliz';
    break;
  case 'NoMerluza':
    recipe.innerHTML=  'Compra alga nori =) los peces también son animales';
    break;
  case 'espinacas':
    recipe.innerHTML=  'En esta casa no se come de eso';
    break;
  default:
    recipe.innerHTML=  'ALERTA! HACER LA COMPRA!';
}