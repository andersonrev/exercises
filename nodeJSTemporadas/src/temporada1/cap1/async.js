'use stric'
// timer
setTimeout(function (){
  console.log('Timeout');
},0)

// check
setImmediate(function () {
  console.log('Immediate');
})

// After next phase
process.nextTick(function () {
  console.log('Tick');
})
