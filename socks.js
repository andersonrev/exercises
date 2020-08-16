function sockMerchant(n, ar) {
    let pairSocks = 0;
    let pila = [...ar];
    let colores = [];
    for (let sock of pila) {

        const existeColor = colores.includes(sock);

        if (!existeColor) {

            colores.push(sock);
            const filter = pila.filter(
                (valor) => {
                    return valor === sock
                });
            
            if (filter.length > 1) {
                pairSocks += Math.floor((filter.length) / 2);
            }

        }

    }
    return pairSocks;
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));