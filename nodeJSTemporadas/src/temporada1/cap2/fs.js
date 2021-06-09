'use strict'

const fs = require('fs');
const path = require('path');
 

// funcion sincrona
const file = fs.readFileSync('callback.js','utf-8');
console.log(file);

// funcion asincrona
fs.readFile('callback.js', 'utf-8', onReadFile );

function onReadFile(err,data){
  if(err){
    console.log(err);
    return;
  } 
   const modified = data.replace(/setTimeout/g, 'setInterval');
  fs.writeFile('callback_interval.js', modified, err => {
    if (err){
      console.log(err.message);
      return;
    }
     console.log('listo !!!');
  })
  console.log(data);
}

/*
 * Best Practices
 * ------------------------------
 *  todas las funciones anónimas tienen un nombre.
 */
