function bonAppetit (bill,k,b){
  const noAnna = bill[k];
  const arregloSinAnna = bill.filter(valor => valor != noAnna);

  const suma = arregloSinAnna.reduce(
    (valorInicial, valorActual)=>{
      return valorInicial + valorActual;
    },0)/2;

  const salida = suma === b? "Bon Appetit" : (b-suma);
  return salida;
}


console.log(bonAppetit([3,10,2,9],1,12));
