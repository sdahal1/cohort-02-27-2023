/* 
Sometimes, we may have situations where we have to rely on some async process to get us some data before running other lines of code.

Promises allows us to handle async code in such a way that we can "wait" for the async code to finish running first, then run some other lines of code only after async code that we rely on is finished

Metaphor time: Sandwich store-> you order a sandwich and you don't immediately get back a sandwich. You get back a ticket (promise) that lets you get the sandwich once the sandwich is finished being created (async process)

*/


const fs = require("fs"); //fs = file system

let quote = null; //sync

console.log("Finding a quote..."); //sync


//ordering a sandwich-> asynchronous, we don't know how long it will take for sandwich to be ready and given to us
// fs.readFile("quotes.txt", (error, buffer) => {
//   if (error) {
//     throw error;
//   }
//   const lines = buffer.toString().split("\n");
//   quote = lines[Math.floor(Math.random() * lines.length)]; //quote that is here is teh final sandwich that is ready
// });


const sandwichTicket = new Promise((resolve, reject)=>{
  //async process goes here
  fs.readFile("ques.txt", (error, buffer) => {
    console.log("creating the sandwich...")
    if (error) {
      // throw error;
      return reject(error)
    }
    const lines = buffer.toString().split("\n");
    quote = lines[Math.floor(Math.random() * lines.length)]; //quote that is here is teh final sandwich that is ready
    return resolve(quote)
  });
})
// const randomQuotePromise = new Promise((resolve, reject)=>{
//   fs.readFile("quotes.txt", (error, buffer) => { //async
//     //buffer is the data collected from quotes.txt
//     if (error) { //error will be present if the file name provided (quotes.txt) is not found
//       // throw error;
//       reject(error)
//     }
//     const lines = buffer.toString().split("\n"); //split the contents of the quote.txt into an array
//     quote = lines[Math.floor(Math.random() * lines.length)]; //get a random quote and set quote to equal to a random quote from quotes.txt

//     resolve(quote)
//   });
// })


//.then() lets us write some code that will only run once the async process is resolved (promise is resolved)
sandwichTicket
  .then((resolvedQuote)=>{ //the resolvedQuote parameter in the .then() callback repreesnts whatever was resolved in the promise
    console.log("eating the sandwich", resolvedQuote)
  })
  .catch((err)=>{ //.catch() is what will run if the promise was rejected. the parameter err represents whatever was passed to reject() in the promise
    console.log("somethign went wrong making your sandwich or reading the file", err)
  })

console.log("texting a friend")
console.log("wash hands")








// randomQuotePromise
//   .then((resolvedQuoteData)=>{
//     console.log(`Your quote is: ${quote}`);
//   })


// console.log("code that does not need the quote data") //sync



/* 



*/