// programa que permite realizar multiplicaciones sin usar el operador matemático *
//

const a = (x,y) => {

  let resultado = 0;

  for (let i=0; i < Math.abs(y); i++){
    if( y < 0){
      resultado -= x;

    }else {

    resultado+= x;
    }
  }
  return resultado;
}

console.log(a(0,-3));
/// manera noob para hacer eso es arriba ahora viene la forma pro

const multiply = (x,y) => {
  let resultado = 0;
  const esPositivo = Math.abs(y) === y;

  for (let i=0; i < Math.abs(y) ; i++){
    resultado = esPositivo? resultado + x : resultado - x;
  }
  return resultado;
}

console.log(multiply(3,-3));

// devolver el mayor elemento de un arreglo iterando una sola vez.

const mayorNum = (arr) => arr.reduce((actual,siguiente) => actual > siguiente? actual : siguiente)
console.log(mayorNum([1,2,3,4]))
// recorriendo el arreglo una sola vez eliminar los elementos undefined, 0 y nulos y false.


const arregloNuevo = (arr) => arr.reduce((acc, el)=> {
  if(el){
   acc.push(el); 
  }
  return acc;
},[]);

console.log(arregloNuevo([0,1,undefined,-1,45,false]));

const arr = [[1,2],[[3,4]],[1,[]]];

const flatten = arr => arr.reduce((acc,el)=> acc.concat(el),[]);
console.log(flatten(arr));


// verificar en una cadena de texto cual es la palabra que se repite mas.


const letraRepetida = (str)=> {
  const lowered =  str.toLowerCase();
  console.log(lowered);
  const splitted = lowered.split(' ');
  console.log(splitted);
  
  const reduced = splitted.reduce((acc,el)=>{
 //   console.log('acumulador = ',acc,'clave',el)
    if(acc[el]){
      acc[el]++
    }else {
      acc[el] = 1;
    }
//    console.log('salida',acc)
    return acc;
  },{});
  console.log(reduced);

  return Object.entries(reduced).reduce((acc,el)=> acc[1] > el[1]? acc : el);
  
  
}

console.log(letraRepetida('This is a a a a a'));
