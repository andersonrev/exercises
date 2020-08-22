function migratoryBirds(arr){
  let buffer = [];
  let aveComun = arr[0];
  let contador = 0;
  for (let tipo of arr){
   let estaEnBuffer =  buffer.some((elemento)=>{
   return elemento == tipo;   
  });
    console.log(buffer);
  if(!estaEnBuffer){
    buffer.push(tipo); 
    let numeroTipoAve = arr.filter(valor => valor === tipo).length; 
    if(numeroTipoAve > contador && tipo < aveComun){
       contador = numeroTipoAve;
       aveComun = tipo; 
    }
  }
 }
  return aveComun;
}
console.log(migratoryBirds([1,2,2,2,3,3]));

/*
 * Recorrer el arreglo contando cuantos tipos de aves existen
 * Para ello no voy a contar si eltipo ya se contó en el arreglo,
 * por ello voy a crear un buffer que guarde los tipos ya almacenados.
 * cada vez que almaceno el mayor valor de aves comunes guardar el tipo y el numero de aves.
 * si el numero de aves es igual al contado de aves no se guarda el tipo
 * Devolver el tipo de ave mas comun y cercano a cero.
 *
 * Si el elemento a analizar no esta en el buffer
 * 	se Agrega al buffer
 * 	y se procede a contar.
 *
 * 	Si el numero de avez es mayor que el contador
 * 		contado = numero de avez.
 * 		tipoave = elemnto.
 * */
