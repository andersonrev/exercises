function getMoneySpent(keyboards, drives, b) {
  let maxSpent = -1;
  for ( let k of keyboards){

    for( let d of drives) {
      let suma = k+d;
	if(suma > maxSpent && suma <= b){
	  maxSpent = suma;
	}	
    }
  }
  return maxSpent;
}

console.log(getMoneySpent([40,50,60],[5,8,12],60));
