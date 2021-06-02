'use strict'

const fs = require('fs');

const file = fs.readFileSync('callback.js','utf-8');
console.log(file);

fs.readFile('callback.js', 'utf-8', function(err,data){
  
})
