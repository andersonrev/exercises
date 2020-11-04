const x = (i,f)=> {
    if(i-f === 0 ){
        return [i];
    }else {
        var numbers = x(i,f-1);
	console.log(numbers);
        numbers.push(f);
        return numbers;
    }
}

//console.log(x(1,7));
x(1,7);
