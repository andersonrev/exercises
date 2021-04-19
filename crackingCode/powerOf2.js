function powerOf2 (n){
  if (n < 1){
    return 0;
  }
  else if( n === 1 ) {
    console.log(1);
    return 1;
  }
  else {
    //console.log(Math.floor(n/2));
    const prev = powerOf2(Math.floor(n/2));
    const curr = prev * 2;
    console.log(curr);
    return curr;
  }
}

//powerOf2(50);

function power(base, potencia){
  if (potencia < 0){
    return 0;
  } else if (potencia === 0){
    return 1;
  } else {
    return base * power(base, potencia - 1);
  }

}

console.log(power(2,5));
