let second = function(){};
console.log(second.name);

let myArray = new Array(3);
myArray[1] = function(){};
console.log(myArray[1].name);

const inicialValor = (inicialValue=0)=>{
  let count = inicialValue;
  return ()=>{
    count++;
    return count;
  }
};


const anderCounter = inicialValor()();
console.log("aleluya", anderCounter);


const myCounter = (function(initialValue = 0){
  let count = initialValue;
  return function(){
    count++;
    return count;
  }
})(77);


console.log(myCounter());
myCounter();
myCounter();
myCounter();


const sum3 = new Function("x","y","z","var t = x+y+z; return t;");
// sum3(4,6,7);
console.log(sum3(4,6,7));

function ShowItself1(identity) {
  this.identity = identity;
  setTimeout(function () {
    console.log(this.identity);
  }, 1000);
}

function ShowItself2(identity){
  this.identity = identity;
  let that = this;
  setTimeout(function () {
    console.log(that.identity);
  },1000)
}

function ShowItself3(identity){
  this.identity = identity;
  setTimeout(function () {
    console.log(this.identity);
  }.bind(this),1000)
}

function ShowItself4(identity){
  this.identity = identity;
  setTimeout(()=> {
    console.log(this.identity);
  },1000)
}


const x = new ShowItself1("Functional");
const y = new ShowItself2("JavaScript");
const z = new ShowItself3("JavaScript");
const x1 = new ShowItself4("JavaScript");
