'use strict'

const fs = require('fs');
const { Transform } = require('stream');

const pass = new Transform();
pass._transform = function transform(chunk, encoding, callback){
  const data = chunk.toString('utf8');
  const modified = data.replace(/setTimeout/g, 'setImmediate');
  callback(null, Buffer.from(modified));
}

const writable = fs.createWriteStream('callbacks_modified.js');
const readable = fs.createReadStream('callback.js');


async function main() {
  for await (const chunk of readable){
    console.log(chunk);
  }
}

//main();


//readable.pipe(writable);

// duplex
readable
  .pipe(pass)
  .pipe(writable);
