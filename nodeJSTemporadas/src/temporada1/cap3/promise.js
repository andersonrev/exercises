'use strict'
// las promesas se van a ejecutar antes (microtask) se ejecutan al mismo nivel de process.nextick, antes que otras cosas vayan a estar agendasdas en el eventloop
const fs = require('fs')
const { promisify, callbackify } = require('util');

console.log('start script');

function readFile(file) {
    const p = new Promise((resolve, reject) => {
        fs.readFile(file, 'utf8', (err, file) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(file);
        })
    })
    return p;
}

/*fs.readFile(__filename, 'utf8')
    .then(file => {
        console.log('que mas ve');
        console.log(file);
    }
    ).catch(
        err => {
            console.log('xdxdxd',err)
        }
    )
*/
const p1 = readFile(__filename);
// const p2 = readFile('fs.js');
Promise.all([
    /*fs.readFile(__filename),
    fs.readFile('gs,js'),
    */
    p1,
    // p1

])
    .then(
        values => {
            //console.log(values);
        }
    ).catch(err => {
        console.log('error en el ultimo catch,', err);
    });

/*Promise.race([
    fs.readFile(__filename),
])
.then(
    values => {
        console.log(values)
    }
)*/


function chainable() {
    return new Promise((resolve, reject) => {
        resolve('im first');
    })
}

chainable()
    .then( function onFirst (value){
        console.log(value);
        return Promise.resolve('Im last');
    })
    .then(
        function onLast(value){
            return Promise.reject(new Error('errorsito'));
        }
    );

process.on('uncaughtException', err => {
    console.log(err)
    process.exit(1)
})

process.on('unhandledRejection', err => {
    console.log(err);
    process.exit(1);
})
/*
fs.readFile(__filename, 'utf8', (err, file) => {
    if(err){
        throw err
    }

    console.log(file);
})
*/
console.log('end script')