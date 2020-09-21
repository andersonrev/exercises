/*const catAndMouse = (x,y,z)=> {
  let string ="";
  const distanciaA = Math.abs(x-z);
  const distanciaB = Math.abs(y-z);

  if( distanciaA > distanciaB
  ){
    string = "Cat B";
  } else if (distanciaB > distanciaA){
    string = "Cat A";
  }else {
    return "Mouse C"
  }
  return string;
}
console.log(catAndMouse(3,5,4));
*/

const cantAndMouse = (x,y,z)=> {
  const distanceA = Math.abs(x-z);
  const distanceB = Math.abs(y-z);
  return (distanceA > distanceB) ? 'Cat B' : (distanceA < distanceB) ? 'Cat A' : 'Mouse C';

}

console.log(cantAndMouse(5,3,4));
