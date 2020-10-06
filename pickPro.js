const pickingNumber = a => {
  let maximo = 0;
  
  const dict = a.reduce((acc,el)=>{
   /* if(acc[el]){
      acc[el]++
    }else{
      acc[el]=1
    }*/
    acc[el]? acc[el]++:acc[el]=1;



    return acc;
  },{});
  
  let arr = Object.entries(dict);

  console.log(arr['2']);

  return maximo;
}

console.log(pickingNumber([1,1,3,3,4,4,2,9]));
