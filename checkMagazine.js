/*const cm = (magazine, note)=>{


  let dicMagazine = magazine.reduce((acc, el)=>{
    acc[el]? acc[el]++ : acc[el]=1
    return acc;
  },{});

  let dicNote = note.reduce((acc,el)=>{
    acc[el]? acc[el]++: acc[el] =1
    return acc;
  },{});

  dicMagazine = Object.entries(dicMagazine);
  dicNote = Object.entries(dicNote);

  let sonDiferentes = false;
  let tieneClaveValor = false;

  dicNote.forEach(el => {
      tieneClaveValor = dicMagazine.some(val => {
	return val[0]==el[0] && val[1] == el[1];
	  
      });

    if(!tieneClaveValor){
      sonDiferentes = true;
    }
  });

return sonDiferentes? console.log('No'): console.log('Yes');

}
*/

const cm = (magazine, note)=> {
  let dicMagazine = magazine.reduce((acc,el)=>{
    acc[el]? acc[el]++ : acc[el] = 1;
    return acc;
  },{});
  dicMagazine = note.reduce((acc,el)=>{
    acc[el]? acc[el]-- : acc[el] = -1;
    return acc;
  },dicMagazine);


  let bandera = Object.entries(dicMagazine).some( val => val[1] < 0);

  console.log(bandera? 'No':'Yes');

}

console.log(cm(['I','love','you'],['i','love','you']));
