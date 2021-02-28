// Bien valido c.lo
function mergeALtenernatel ( word1, word2 ){
  let salida = "";
  const palabraLongMax = word1.length >= word2.length ? word1 : word2;
  const palabraLongMin = word1.length < word2.length ? word1 : word2;
  for (let i=0; i < palabraLongMax.length ; i++){
    if(palabraLongMin[i]){
     salida+=palabraLongMax[i] + palabraLongMin[i];
    }else {
      salida+=palabraLongMax[i];
    } 
  }
  return salida;
}

console.log(mergeALtenernatel("hola","hola2"));


function mergeProString (word1, word2){
  return word1.split('')
	  .map((letra, indice) => letra + word2.charAt(indice))
	  .join("")
	  + word2.substring(word1.length);
}


console.log(mergeProString("ho","abc"));
