function dayOfProgrammer(year){
  let feb;
  const dayConst = 256;
  let salida ='';
  const esBisiesto = year%4=== 0;
  const esCenteno = year%100 === 0;
  const esFourCenteno = year%400 === 0;
  if(year < 1918){ // julian Calendar
    feb = esBisiesto ? 29 : 28; 
    
  }else if (year > 1918){
    feb = esFourCenteno || !esCenteno && esBisiesto ? 29:28;
  }
  else {
    feb = 15; 
  }
  feb = dayConst - (feb + 215);
  salida+=feb + '.09.'+year;
//  return esBisiesto;
  return salida;


}

console.log(dayOfProgrammer(2100));
