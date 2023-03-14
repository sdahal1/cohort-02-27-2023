// let secret = 42;
// let guess = 55;

// if (guess !== secret) {
//   console.log("thats not the secret")
//   throw new Error("The secret password is incorrect! Aborting!")
//   // throw new Error({message: "Incorrect Password!", statusCode: 500})
//   // throw "Incorrect Password";

// }

// console.log("Code to load up profile pictures")



function one() {
  console.log("running function 1!")
  two();
  console.log("after calling functon 2")
}
function two() {
  console.log("running function 2!")
  three();
}
function three() {
  console.log("running function 3!")
  // throw ["oops", "try again"]
  throw {message: "oops", status: 500}
  // throw new Error("Here's the error");
  // console.log("after function 3 error")

}


one();