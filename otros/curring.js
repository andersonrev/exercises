const sumarConCurrying = (a) => (b) => a + b;

const sumar10 = sumarConCurrying(10);
const sumarOtros10 = sumarConCurrying(10);
const resultado = sumarOtros10(100);
console.log(sumar10);
console.log(sumarOtros10);
console.log(resultado);

const resultado2 = sumar10(50);
console.log(resultado2);

const resultado3 = sumar10(10);
console.log(resultado3);
// ejemplo 1
const estilosPorDefecto = 'color: white;'
function crearImpresoraDeMensajes(tipo, estilos){
  return function mensaje(str){
    console.log(`%c ${tipo}: ${str} `, estilosPorDefecto + estilos);
  }

}


const error = crearImpresoraDeMensajes('Error', 'background: red; ');
const warning = crearImpresoraDeMensajes('Warning', 'background: orange; ');
const exito = crearImpresoraDeMensajes('Éxito', 'background: green; ');
const info = crearImpresoraDeMensajes('Info', 'background: red; ');
const js = crearImpresoraDeMensajes('JS', 'background: yellow; color: black');


/// otro ejemplo
//

function crearContador() {
  let contador = 0;

  return function incrementar() {
    contador = contador + 1;
    return contador;
  }
}


const contador1 = crearContador();
contador1(); // 1
contador1(); // 2
contador1(); // 3

const contador2 = crearContador();
contador2(); // 1
contador2(); // 2
contador2(); // 3



function crearContador2(){
  let contador = 0;

  return {
    incrementar: function() {
      contador = contador + 1;
      return contador;
    },
    decrementar: function() {
      contador = contador -1;
      return contador;
    },
    obtenerValor: function() {
      return contador;
    }
  }
}



const contador2 = crearContador2();
contador2.incrementar();
contador2.incrementar();
contador2.decrementar();
contador2.obtenerValor();

// para que sirven las clausuras
// 1-  Proteger el acceso a las variables
// 2-  Fabrica de funciones 
