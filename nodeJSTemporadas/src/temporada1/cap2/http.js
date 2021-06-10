'use strict'

const http = require('http')
const server = http.createServer();


server.on('request', (req, res)=> {
  res.end('Hello World');
});

server.on('connection', socket => {
  console.log(socket);
});

server.on('listening', ()=> {
  console.log('Servidor escuchando');

});

server.listen(9999);

