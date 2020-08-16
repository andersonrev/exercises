function repeatedString(s, n) {

    /**
     * 
     * Yo manqueando:: :v
     * 
     *   let cadenaRepetida = s;
    let numbersA = 0;
    while (cadenaRepetida.length <= n) {
        cadenaRepetida = cadenaRepetida.concat(s);
    };

    if (cadenaRepetida.length > n) {
        cadenaRepetida = cadenaRepetida.slice(0, -(cadenaRepetida.length - n));
    }

    for (let letra of cadenaRepetida) {
        console.log(letra);
        if (letra === 'a') {
            numbersA++;
        }
    }
    
    return numbersA;
     */
 
    let countA = (s) => s.split('a').length -1 ;

    const repeticiones = Math.floor(n/ s.length);
    const resto =  s.slice(0,n%s.length)
    return countA(s) * repeticiones + countA(resto);

}

console.log(repeatedString('a', 1000000000000));