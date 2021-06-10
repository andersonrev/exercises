'use strict'

const EventEmitter = require('events');
const events = new EventEmitter();
const fs = require('fs');

function onPing(){
  console.log('Recibí un ping');
}

function onSecondPing(){
  console.log('Recibi otro ping');
  events.emit('pong');
}

events.on('ping', onPing);
events.on('ping', onSecondPing);

events.once('pong', function onPong(){
  console.log('solo un pong!!');
  events.removeListener('ping', onSecondPing);
  fs.readFile('noexit', err => events.emit('error', err));
  // events.emit('error', new Error('crash!!'));
})



events.on('error', err => {
  console.log(err.message);
})

events.emit('ping');
events.emit('ping');
