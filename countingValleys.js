function countingValleys(n, s) {

    /**
     * Si el nivel es < 0 - > estoy en un VALLE
     * Si el nivel es > 0 -> estoy en un montaña
     * 
     * 
     * CUando este en el nivel inferio a 0 y llego a cero 
     * Entonces debo de sumar el contador a 1 .
     
     */

     s=s.split("");
    let valles= 0;
    let aux = 0;
    // const niveles = s.map((valor) => {
    //     if (valor === 'D') {
    //         return valor = -1;
    //     } else {
    //         return valor = 1;
    //     }
    // }).map((valor, indice) => {
           
    //     if(indice == 0){
    //         aux = valor;
    //         return valor;

    //     }else {
    //         aux = valor + aux;
    //         return valor =  aux;
    //     }
    // });

 
    // niveles.forEach((element, indice, arreglo )=> {
    //     if(element=== 0 && arreglo[indice -1]=== -1){
    //         valles++;
    //     }
    // });
   

    s.forEach(element => {
        if(element === 'U') aux++;
        if(element === 'D') aux--;

        if(aux===0 && element==='U'){
            valles++;
        }
    });
    return valles;

}

//['D', 'D', 'U', 'U', 'U', 'U', 'D', 'D']
console.log(countingValleys(8,"DDUUUUDD"));