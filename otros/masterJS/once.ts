const once = (fn : Function) => {
  let done : boolean = false;
  return (...argumentos: any ) => {
    if(!done) {
      done = true;
      fn(...argumentos);
    }
  }
}

const hola = (str: string) => {
  console.log(str);
}

const unaSolaVez = once(hola);

//unaSolaVez("HOLA CABALLO");
//unaSolaVez("HOLA CABALLO");

const otraVez = once(hola);
console.log("once", otraVez, "typeof", typeof otraVez, "ejecucion", otraVez("CHAO"));
const thisManyTimes = ( fn: Function , n: number ) => {
  let contador = 1;
  return (...argumentos : any) => {
    if(contador <= n){
      fn(...argumentos);
      contador++;
    }
  }
}

const threeTimes = thisManyTimes(hola,3);


threeTimes("HOLA");
threeTimes("HOLA");
threeTimes("HOLA");
threeTimes("HOLA");
threeTimes("HOLA");
