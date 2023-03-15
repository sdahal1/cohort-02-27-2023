/* 
Concept 1

We have Sync code and async code in js. JS will run all the sync code first and foremost, then it will run the async code.

Which code is blocking?

Sync Code is blocking. This means that sync code has to finish executing fully before the next sync code runs

Async Code is non-blocking. This means that the async code (code A) will run and the next async code (code b) doesn't need wait for code A to finish for code B to run

Benefits of having non-blocking code: When loading up parts of an app that need to wait for external network request data (apis). We can have the code that doesn't need to wait for the long network call process to load up without needing the async code to have completed yet
*/

//example of sync runs before async, even if the async code takes 0 seconds to run!
// console.log("1")

// setTimeout(() => {
//   console.log("2")
// }, 0);


// setTimeout(()=>{
//   console.log("3")
// }, 0)

// console.log("4")


//example that its async code is non blocking-> even though the setTimeout of 4000 ms (code A) is written before the setTimeout of 2000 ms (code B), ....code B does not need to wait for code A to finish to execute 
console.log("1")

setTimeout(() => {
  console.log("2")
}, 4000);

setTimeout(()=>{
  console.log("3")
}, 2000)

console.log("4")

