// formas para dejar de usar let y usar const
//
/*
let myLog;

if(DEVELOPMENT){
  myLog = someText => console.log(someText);
} else {
  myLog = someText => {};
}

// asi se deja de usar como varon usando operadores ternarios

const myLog = DEVELOPMENT
  ? someText => console.log(SomeText)
  : someText => {}
  */


const simpleAction = t => {return {
  type: t
}};

console.log(simpleAction("INIRIALIZE"));
