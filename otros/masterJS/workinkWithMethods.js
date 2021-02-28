// Forma 1: 
fetch("some/remote/url").then(function (data) {
  myObject.store(data);
})
// Forma 2 mejorada FAILLL!!
fetch("some/remote/url").then(myObject.store)
// Fixed
fetch("some/remote/url").then(myObject.store.bind(myObject));



// Forma 1
function doSomeMethod(someData){
  return someObject.someMethod(someData);
}

// deberia convertirse a:

const doSomeMethod = someObject.someMethod.bind(someObject);


// sort con palabras en espàñol

palabras.sort((a,b)=> a.localeCompare(b, "es"));
const spanishComparison = (a,b)=> a.localeCompare(b, "es");
// sort solamente trabaja con strings.


