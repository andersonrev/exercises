/*const pickingNumber = (arr) => {
  let arregloMaximo = [];
  for (let i= 0; i < arr.length; i++){
    let arregloAuxiliar = [];
    arregloAuxiliar.push(arr[i]);
    for ( let y=i+1; y < arr.length ; y++){
      if(Math.abs(arr[i] - arr[y]) === 1 | Math.abs(arr[i] - arr[y]) === 0 ){
	arregloAuxiliar.push(arr[y]);
      }
    }
    if ( arregloAuxiliar.length > arregloMaximo.length){
      arregloMaximo = [];
      arregloMaximo = [...arregloAuxiliar]
    }
  }	
  return arregloMaximo.length;
}

console.log(pickingNumber([4,6,5,3,3,1]));
*/

async pick = (arr) => {
  let max = 0;
  let frecuencias = [];

  arr.forEach((el)=> {
    let fr = arr.filter(valor => valor ===  el).length;
    frecuencias[el] = fr;
  });

  let ar = frecuencias.map(el=>typeof el === "undefined"? 1: el);

  console.log('ar',ar);

  frecuencias.forEach((el,indice)=>{
    
    
    let suma =0; 
    if( indice != frecuencias.lenght -1){ 
      //console.log(frecuencias[indice+1], el);
      //suma = el;
      
      suma = el + frecuencias[indice + 1];      
    }else {

    }
     if( suma > max){
       max = suma
     }
 });

  return max;
}

console.log(pick([66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66]));

//console.log(pick([1,2,2,3,3,4]));
