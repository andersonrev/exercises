function divisibleSumPairs(n,k,ar){
  n = ar.length;

  let count = 0;
  for(let a=0;a<n;a++){
    for(let b=a+1 ; b <= n; b++){
      const esDivisible = (ar[a]+ar[b])%k === 0;
//      const cumpleRegla = a<b; 

      if(esDivisible ){

	count++; 
      }
  
    }
  }
  return count;
}

console.log(divisibleSumPairs(6,3,[1,3,2,6,1,2])); 
