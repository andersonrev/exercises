'use strick'

// es una forma de trabajar con funciones asincronas

const fs = require('fs');
const { promisify } = require('util');
const sleep = require('then-sleep');
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

async function main() {
    try {
        const file = await readFile(__filename, 'utf8');
        console.log('tenemos el archivo', file);
        await sleep(800);
        console.log('vamos a escribir');
        await writeFile('copy.js', file);
        await sleep(500);
        console.log('Terminamos');

    } catch (e) {
        console.error(e);
    }

}

main();