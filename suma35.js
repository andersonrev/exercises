function fiboEvenSum(n) {
    // You can do it!

    let inicial = 1;
    let segundo = 2;

    let sumaPares= 0;

    do {

       if(segundo%2===0){
            sumaPares+=segundo;
            console.log('segundo',segundo);
        };
        let aux = segundo;
        segundo = inicial + segundo;
        inicial = aux;

    }while (segundo < n);

    return sumaPares;
}
const cadenaFino = fiboEvenSum(10);
console.log(cadenaFino);
