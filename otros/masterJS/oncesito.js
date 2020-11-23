const once = fn => {
  let done = false;
  return (...args) => {
    if(!done){
      done = true;
      fn(...args);
    }
  }
}


const squeak = a => console.log(a,"squeak");

squeak("original");
squeak("original");

const squeakOnce = once(squeak);

squeakOnce("only once");
squeakOnce("only once");
squeakOnce("only once");


