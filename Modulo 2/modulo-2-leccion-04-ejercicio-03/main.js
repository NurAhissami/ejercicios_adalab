
const functIva = document.querySelector ('p');

function number (a) {
  let iva= a*(21/100);
  let total= iva + a;
  return "Precio sin IVA:" + a +  "IVA:" + iva + "y total:" + total;
}

functIva.innerHTML= number(10)