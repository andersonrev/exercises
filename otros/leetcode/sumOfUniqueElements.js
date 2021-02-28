function sumOfUnique(nums) {
    // 1. guardar en un objeto (diccionario) todos los elementos como clave y luego recorrer y cada vez que aparezcan que se ñade el valor sumando uno.
    
    const objetoContadorNumeros = nums.reduce((acumulador, numero)=>{
        if(acumulador[numero]){
            acumulador[numero]++;
        }else {
            acumulador[numero] = 1;
        }
        
        return acumulador;
    },{});

    const suma = Object.entries(objetoContadorNumeros).reduce((acc, valor)=>{

        if(valor[1]===1){
	    const valor2 = +valor[0];
            return acc+=valor2;
	} else {
	  return acc; 
	}
    },0);
    
    return suma;

};


console.log(sumOfUnique([1,2,3,2]));
