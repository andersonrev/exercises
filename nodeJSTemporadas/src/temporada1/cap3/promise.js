'use strict'

const fs = require('fs')

console.log('start script');

function readFile(file) {
    const p = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('this is a file')
        },500)
    })
    return p;
}

readFile().then().catch()
/*
fs.readFile(__filename, 'utf8', (err, file) => {
    if(err){
        throw err
    }

    console.log(file);
})
*/
console.log('end script')