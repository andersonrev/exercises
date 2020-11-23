const alternate = (f: Function,g: Function) => {
  let done : boolean;
  return (...arg: any)=>{
    if(!done){
      f(...arg);
    }else{
      g(...arg);
    }      
    done = !done;
  }
}

let sayA = () => console.log("A");
let sayB = () => console.log("B");

let alt = alternate(sayA,sayB);

alt();

alt();
alt();
alt();
