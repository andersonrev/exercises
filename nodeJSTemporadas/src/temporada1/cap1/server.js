'use strict'
// crearServer y readFile son operaciones asíncronas y listen .
// cada require es sincrono, bloquea el event loop
const http = require('http');
const fs = require('fs');

const server =  http.createServer(function handler (req, res){
  fs.readFile(__filename, function onReadFile(err, file){
    if(err){
      res.statusCode = 500;
      return res.end(err.message);
    }

    res.end(file);
  })
})

server.listen(9999);
