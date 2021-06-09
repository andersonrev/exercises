'use strict'

const fs = require('fs');
const path = require('path');
const once = require('once');


// funcion sincrona
// const file = fs.readFileSync('callback.js','utf-8');
// console.log(file);

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
    const modified = data.replace(/setTimeout/g, 'setInterval');
    fs.writeFile('callback_interval.js', modified, onWriteFile)
    // console.log(data);
    callback();
  }
}

doFileOperations('callback.js', ()=>{
  console.log('hemos terminado todo!!');
});
/*
 * Best Practices
 * ------------------------------
 *  todas las funciones anónimas tienen un nombre.
 */
