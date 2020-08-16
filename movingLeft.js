function rotLeft(a, d) {

    /*
    let n = d%a.length;
    let arreglo = [];
    for(let i=0; i < a.length; i++){
        arreglo[i]= a[(i+n)%a.length]
    }
    */

    let arreglo = a.slice(d);
    let arr2  = a.slice(0,d);
    console.log(arreglo, arr2);
    return arreglo;

}


rotLeft([1,2,3,4,5],8);
