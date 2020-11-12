function busquedaBinaria(key: number, arreglo: number[]): number {
    let lo = 0;
    let hi = arreglo.length -1;

    while(lo <= hi){
        let mid = lo + (hi -lo)/2;
        if(key < arreglo[mid])
            hi = mid -1;
        else if(key > arreglo[mid])
            lo = mid +1;
        else
            return mid;
    }
    return -1;
}
