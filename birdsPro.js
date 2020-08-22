function migratoryBirds(arr){
  let tipos = [];  
  let contador = 0;
  let tipoAve = arr[0];


  for (let tipo of arr){
    let estaEnTipos = tipos.some((valor)=>{
    return valor == tipo
    });
    if(!estaEnTipos){
      tipos.push(tipo);  
      let numeroTipoAve = arr.filter(valor => valor === tipo).length;
      if(numeroTipoAve > contador){
	tipoAve = tipo;
	contador = numeroTipoAve;
      }else if( contador === numeroTipoAve && tipo < tipoAve){
	tipoAve = tipo;
      }
    }
  }
/*  tipos = arr.filter((valor)=>{
  return valor > ;
  });*/


  return tipoAve;
}

console.log(migratoryBirds([1,1,2,2,4,4,4,3,3]));
