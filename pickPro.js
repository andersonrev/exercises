/*
const pickingNumber = a => {
  let maximo = 0;
  
  const dict = a.reduce((acc,el)=>{
   //if(acc[el]){
    //  acc[el]++
    //}else{
     // acc[el]=1
   // }
 
    acc[el]? acc[el]++:acc[el]=1;



    return acc;
  },{});
  
  let arr = Object.entries(dict);

  console.log(arr['2']);

  return maximo;
}
*/


const pickingNumber = (a) => {
  
  // Construct our map
    var map = new Array(100);
    map.fill(0);


    // Populate map
    for(var i = 0; i < a.length; i++){
        map[a[i]]++;
    }

    // Find the max sum of two values with keys within one of each other
    var max = 0;
    for(var i = 1; i < map.length; i++){
        if(map[i] + map[i - 1] > max){
            max = map[i] + map[i - 1];
        }
    }
    console.log(max);
}	

console.log(pickingNumber([1,1,3,3,4,4,2,9]));
