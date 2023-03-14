/* 
Synchronous code -> blocking, runs in the order its written. Blocking because the next line of code can only start after the current line of code is finished running 


Asynchronous code-> non-blocking, it will run at the end after all synchronous code finishes running. It's non blocking because it will allow other lines of code to run even if the async code is not done running yet



1. Synchronous code all runs first and foremost (blocking)
2. Then JS (node) runtime will group all the async code into a line (queue). In this queue, it will fire off the async code in the order that they were written. However, it will __NOT____ wait for the current asyc code to finish before running the next async code (non blocking)

*/

function printNum(num){ //sync
  console.log("printing the num you entered")
  console.log(num)
  console.log("counting down now")
  for(let i = num ; i>=0; i--){
    console.log(i)
  }
}

console.log('hi') //sync

//setTimeOut() is async code
setTimeout(()=>{
  console.log("in the set timeout cb function after 3000ms")
},0)

setTimeout(()=>{
  console.log("set timeout after 1000ms")
},0)


console.log("how") //sync
printNum(5) //sync
console.log("are") //sync
console.log("you") //sync


let num = 1;
setInterval(()=>{
  console.log(`${num} seconds have passed`)
  num++
},1000)


/* 
setTimeout(()=>{
  console.log("in the set timeout cb function after 3000ms")
},3000)

setTimeout(()=>{
  console.log("set timeout after 2000ms")
},1000)

setInterval(()=>{
  console.log(`${num} seconds have passed`)
  num++
},1000)

*/