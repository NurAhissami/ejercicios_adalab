
const functIva = document.querySelector ('p');
const ivaNumber= 0.21;

function number (a) {
  const iva= a*ivaNumber;
  const total= iva + a;
  return "Precio sin IVA:  " + a+  "      IVA:    " + iva + "    y total:" + total;
}

const ticket = number(10);

functIva.innerHTML= ticket;