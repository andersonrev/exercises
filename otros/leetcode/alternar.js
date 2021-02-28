function alternar (s){
/*  const arregloCadena = cadena.split("");
  let salida = "";
  console.log(arregloCadena);
  let contador = 0;
  let arregloFinal = [...arregloCadena];
  arregloCadena.reduce((primer, segundo, indice, vector)=>{
     console.log({primer, segundo, vector}) 
    if(primer === '0'){
      if(segundo !== '1'){
	arregloCadena.splice(indice,1,'1');
      }
    } else {
      if(segundo !== '0'){
	arregloCadena.splice(indice,1,'0');
      }
    }
    return segundo;
  });

  return arregloCadena;*/
    let s0 = 0;
    let s1 = 0;
    let last = "0"
    for(let i=0; i<s.length; i++){
        if(s[i]===last)s0++;
        if(s[i]!==last)s1++;
        last = last==="0" ? "1" : "0"
    }
    return Math.min(s0, s1)
}

/*
 * Convertir a arreglo.
 * verificar el primer elemento y el segundo
 *
 */

console.log(alternar("1001"));
