// Promise.resolve("hello")
//     .then((value) => Promise.reject(value + " world"))
//     .then((result) => console.log("I said", result))
//     .catch((result) => console.log("They said: ", result));




// //guess the result
Promise.resolve({ name: "Lebron" })
    .then((value) => {
        // console.log("value is this", value.team)
        return value.team
            ? Promise.reject(value)
            : Promise.resolve({ error: "Missing key." });
    })
    .then((result) => console.log("Success:", result))
    .catch((result) => console.log("Failure:", result));




// let x = 5

// if(x === 5){
//   console.log("high 5!")
// }else{
//   console.log("nah")
// }

