'use strict'




// funcion asincrona
function sayHello (callback){
  setImmediate(callback, 'Hello async');
}

sayHello(function (result){
 console.log(result);
})
// funcion no asincrona
function sayBye(callback){
  callback('Bye callback');
}

sayBye(function(result){
  console.log(result)
})

// Bye
// Hellow


let bar;

function domeSomething (callback){
  callback();
}

domeSomething(function (){
  console.log('bar', bar, 'callback');
})

// async
function domeSomethingAsync(callback){
  setImmediate(callback);
}
domeSomethingAsync(function(){
  console.log('bar', bar, 'Async')
})

bar = 1;


