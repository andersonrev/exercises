function migratoryBirds(arra){
  arra.map(valor => console.log(valor));
  let arregloTipos = [];
  let contador = 0;
  let tipo;
  for(let i=0; i<=arra.length ; i++){
   // console.log(i);
    let estaenTipos = arregloTipos.some(valor =>{
      
      return valor ===arra[i]});

    if(!estaenTipos){
      arregloTipos.push(arra[i]);
    }
//    console.log(estaenTipos);
      console.log(arregloTipos);
  }
}

migratoryBirds([1,2,2,3,3,3,4]);
