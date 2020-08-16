function jumpingOnClouds(c) {

    //let jumps = 0;

    // for (let i = 0; i < c.length - 1; i++) {
    //     jumps++;
    //     if (i + 2 < c.length && c[i + 2] === 0) { // en dos espacios hay un cero?
    //         i++;
    //     }
    // }

    //    return jumps;


    //     let count = -1;

    //     let n = c.length;
    //     for (let i = 0; i < n; i++, count++) {
    //         console.log(i,count);
    //         if (i < n - 2 && c[i + 2] == 0) i++;

    //         console.log('despuesdel del if',i,count)
    //     }
    //     console.log('XD Count', count);
    //    // return count;



    let jump = 0;

    for (let posicion = 0; posicion < c.length -1; posicion++) {
        if (posicion < c.length - 2 && c[posicion + 2] === 0) {
            posicion++;
            jump++;
        }else{
            jump++;
        }
    }

    return jump;

}





console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]));
