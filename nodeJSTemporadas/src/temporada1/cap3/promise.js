'use strict'

const fs = require('fs').promises
const { promisify, callbackify} = require('util');

console.log('start script');

/*function readFile(file) {
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
}*/


fs.readFile(__filename, 'utf8')
    .then(file => {
        console.log(file);
    }
    ).catch(
        err => {
            console.log(err)
        }
    )


Promise.all([
    fs.readFile(__filename),
    fs.readFile('gs,js'),
    fs.readFile('afadfa')
])
.then(
    values => {
        console.log(values);
    }
)

process.on('uncaughtException', err => {
    console.log(err)
    process.exit(1)
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