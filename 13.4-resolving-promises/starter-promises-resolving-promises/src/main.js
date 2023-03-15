/* 
Concept-> Whatever you return in a .then(), the next .then()'s cb parameter will have the previos .then()'s return


*/

const { welcome, goodbye, tell } = require("../utils/fortune-teller");

const welcomePromise = welcome();
const tellPromise = tell("Should I get a parrot?");
const goodbyePromise = goodbye();


// welcome()
//   .then((resolvedWelcomeMsg)=>{
//     console.log(resolvedWelcomeMsg);
//     return "wazzaap"
//   })
//   .then((word)=>{
//     console.log(word)
//     return 1
//   })
//   .then((info)=>{
//     console.log(info)
//   })

// welcomePromise
//   .then((resolvedData)=>{
//     console.log(resolvedData)
//     tellPromise
//       .then((resolvedData)=>{
//         console.log(resolvedData)
//         goodbyePromise
//           .then((resolvedData)=>{
//             console.log(resolvedData)
//           }) 
//       })
//   })

const result = []
welcome()
  .then((resolvedData)=>{
    console.log(resolvedData)
    result.push(resolvedData)
    return tell("Should I get a parrot?")
  })
  .then((tellMsg)=>{
    console.log(tellMsg)
    result.push(tellMsg)
    return goodbye()
  })
  .then((goodbyeMsg)=>{
    console.log(goodbyeMsg)
    result.push(goodbyeMsg);
    console.log(result)
    return result;
  }) 
 

function makeMeTurkeySandwich(){

  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      let randomNum = Math.random(); //0-1 eg: 0.23 0.77
  
      if(randomNum< 0.1){ //10% of the time the store doest not have all the ingredients for your sandwich
        reject("We could not make your sandwich")
      }else{
        let sandwich = {
          name: "Turkey Sammy",
          toppings: ["Lettuce", "Onions", "Tomatoes"]
        }
        resolve(sandwich)
      }
    },3000)
  })
  // let sandwich = {
  //   name: "Turkey Sammy",
  //   toppings: ["Lettuce", "Onions", "Tomatoes"]
  // }
  // return Promise.reject(sandwich)
}

// makeMeTurkeySandwich()
//   .then((resolvedData)=>{
//     console.log(resolvedData)
//   })
//   .catch((rejectedData)=>{
//     console.log("rejected!", rejectedData)
//   })

