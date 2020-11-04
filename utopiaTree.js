const utopiaTree = (n) => {
  let salida = 0;
  for ( let i = 0; i <= n ; i++ ){
    if(i === 0){
      salida +=1;
    }else if (i%2 === 0 ){
      salida +=1;
    }else if (i%2 !== 0 ){
      salida *=2;
    }
  }
  
  return salida;
}

console.log(utopiaTree(5));
