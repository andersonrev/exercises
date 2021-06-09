// callback es un funcion que se va a ejeutar despues de que un operacion asincrona ocurra.
//

'use strict'
function sayHello (){
  console.log("Hola mundo!")
}

setInterval(sayHello,300);

back.js','utf-8');
// console.log(file);


const files = [
  'callback.js',
  'fs.js',
  'callback_interval.js'
];

const done = after(files.length, ()=>{
  console.log(`Hemos procesado ${files.length} archivos`);
})

files.forEach(file => doFileOperations(file,done));
// funcion asincrona
function doFileOperations (filename, callback){

  callback = once(callback);

  fs.readFile(filename, 'utf-8', onReadFile );
  // function Expresion
  const onWriteFile = err => {
    if (err){
      console.log(err.message);
      return;
    }
    console.log('listo !!!');
    callback();
  }


  function onReadFile(err,data){ 
    if(err){
      console.log(err);
      return;
    } 
    const modified = data.replace(/setInterval/g, 'setInterval');
    fs.writeFile('callback_interval.js', modified, onWriteFile)
    // console.log(data);
    callback();
  }
}

/*
 * Best Practices
 * ------------------------------
 *  todas las funciones anónimas tienen un nombre.
 */

-------
 *  todas las funciones anónimas tienen un nombre.
 */
---------------
 *  todas las funciones anónimas tienen un nombre.
 */
e.
 */
-
 *  todas las funciones anónimas tienen un nombre.
 */
mbre.
 */
