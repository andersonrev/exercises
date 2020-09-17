function pageCount(n,p){
  const izquierda = Math.floor(p/2);
  const derecha = Math.floor(n/2 -izquierda);
  console.log(izquierda);
  console.log(derecha);
  console.log(Math.min(izquierda, derecha));
}

pageCount(6,5);
