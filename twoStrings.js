const twoStrings = (s1,s2)=>{
  s1 = s1.split('')
  s2= s2.split('')
  const dict = s1.reduce((acc,el)=>{
    acc[el]? acc[el]++ : acc[el]=1;
    return acc;
  },{});


  const salida = s2.some(el => dict[el]? true: false); 

  return salida? 'YES':'NO';
}


console.log(twoStrings('Hellow','world'));
