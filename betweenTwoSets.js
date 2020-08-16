/*
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function getTotalX(a, b) {
    // Write your code here
    // Write your code here
    const lowLimit = a[a.length - 1];
    console.log('lowlimit', lowLimit);
    const highLimit = b[0];
    console.log('hightLimit', highLimit);
    let consideredMultiples = [];
//get multiples of the highest member in the first array till the lowest value in the second array
    for (let i = lowLimit; i <= highLimit; i += lowLimit) {
        consideredMultiples.push(i);
    }
//filter the array based on whether members of first array can go in it
    consideredMultiples = consideredMultiples
        .filter((multiple) => {
            a.reduce((shouldFilter, val) => {
                (multiple % val !== 0) ? false : (shouldFilter) ? true : null
            }, true)
        });
//filter the array based on whether its members can go in the second array
    consideredMultiples = consideredMultiples
        .filter((multiple) => {
            b.reduce((shouldFilter, val) =>
                (val % multiple !== 0) ? false : (shouldFilter) ? true : null, true)
        });


    return consideredMultiples.length;

}

console.log(getTotalX([2, 3], [2, 4]));
