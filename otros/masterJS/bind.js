const modulo = {
  x:42,
  getX: function(){
    return this.x;
  }
};

const unboundGetX = modulo.getX;

console.log(unboundGetX());


const boundGetX = unboundGetX.bind(modulo);
console.log(boundGetX());

const boundAnderson = modulo.getX.bind(modulo);
console.log(boundAnderson());
