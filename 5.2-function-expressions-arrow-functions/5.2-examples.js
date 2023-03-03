// Function declaration (you can even call these functions before they're declared)

function ratingAsText(park) {
  console.log("This is a function declaration.");
  return park.rating > 4 ? "Excellent!" : "Good";
}

// Function expression -> use a variable to equal to a function
const ratingAsText2 = function ratingAsText(park) {
  console.log("This is a function expression.");
  return park.rating > 4 ? "Excellent!" : "Good";
}


// Anonymous function expression
const ratingAsText3 = function (park) {
  console.log("This is an anonymous function expression.");
  return park.rating > 4 ? "Excellent!" : "Good";
}

// ratingAsText3({name: "Grand canyon", rating: 5})


// arrow function expression
const ratingAsTextArrow = (park) => {
  console.log("This is an arrow function.");
  return park.rating > 4 ? "Excellent!" : "Good";
}

// console.log(ratingAsTextArrow({name: "Grand canyon", rating: 5}))



const location = {
  name: "Arches",
  state: "Utah",
  geo: {
    lat: 38.68,
    lon: -109.57,
  },
};


/* 
1. If you only have 1 parameter, no parenthesis needed around the parameter
2. Implicit return -> if you only have one line of code in the function body AND that one line of code is a return statement, we can omit the curly brace "{}" for the function body and omit the "return" word

*/
const getLocationState = location => location.state;



console.log(getLocationState(location))