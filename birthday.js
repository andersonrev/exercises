function birthday(s, d, m) {
    /**
     * s es un arreglo
     * d dia del cumpleañosç
     * m mes del cumpleaños
     * 
     * Problema: queremos encontrar el numero de pedazos de chocolates que cumplan las siguinetes condiciones
     * 
     * 1. elementos juntos cuyo tamaño es = m
     * 2. la suma de los elementos de esos arreglos es = d;
     * 
     * 
     * Solucion:
     * 
     * Recorrer el arreglo tomando en cuenta
     * y sumando.
     * SI la suma es = d
     * entonces count++
     * 
     */

    let count = 0;
    const n = s.length;
    s.forEach((element, index, array) => {

        const eslimite = (n-index)>=m;

        if (eslimite) {
            let arreglo = array.slice(index, m + index);
            const sumaElementos = arreglo.reduce((acumulador,valor)=>{
                return acumulador+valor; 
            },0);

            if(sumaElementos === d){
                count++;    
            }
            
        }


    });


    return count;
}

birthday([1, 2, 1, 3, 2], 3, 2);