'use strict'

const fs = require('fs');
const path = require('path');
const once = require('once');
const after = require('after');
const { series, each } = require('async');


// funcion sincrona
// const file = fs.readFileSync('callback.js','utf-8');
// console.log(file);


const files = [
  'callback.js',
  'fs.js',
  'callback_interval.js'
];

const done = (err)=>{
  if (err){
    console.log(err.message);
    return;
  }
  console.log(`Hemos procesado todos los archivos`);
}

each(files, doFileOperations, done)

// funcion asincrona
function doFileOperations (filename, callback){

  callback = once.strict(callback);

  fs.readFile(filename, 'utf-8', onReadFile );
  // function Expresion
  const onWriteFile = err => {
    if (err){
      console.log(err.message);
      return;
    }
    console.log('listo !!!', filename);
    callback(null, true);
  }


  function onReadFile(err,data){ 
    if(err){
      console.log(err);
      return;
    } 
    const modified = data.replace(/setTimeout/g, 'setInterval');
    fs.writeFile('callback_interval.js', modified, onWriteFile)
    // console.log(data);
  }
}

//for ( let file of files ){
 // doFileOperations(file, done);
// }
// files.forEach(file => doFileOperations(file,done));

/*
 * Best Practices
 * ------------------------------
 *  todas las funciones anónimas tienen un nombre.
 */
