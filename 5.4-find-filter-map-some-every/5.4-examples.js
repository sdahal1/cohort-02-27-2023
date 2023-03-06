const parks = [
  { name: "Biscayne", rating: 4.2 },
  { name: "Grand Canyon", rating: 5 },
  { name: "Gateway Arch", rating: 4.5 },
  { name: "Indiana Dunes", rating: 4.1 },
];


/* 
.find() -> loop through the array to find the first element that matches a condition
  - accepts a callback function just like forEach does
  - the callback function accepts parameters for element and index, just like forEach does
  - the callback function has to return a condition. the find() method will stop and return the first element that the condition evaluates true for
  - .find() will return the ELEMENT that condition returns true on.......OR if no element gets a truthy condition, it will return undefined
*/

function findParkByName(parks=[], name){

  const result = parks.find((element, idx)=>{
      //return a condition that you're looking for a match on
      return element.name === name
  })

  return result;
}

const findParkByNameShortWay = (parks=[], name) => parks.find((element, idx)=> element.name === name)


// console.log(findParkByName(parks, "Gateway To Hawaii")) //undefined
// console.log(findParkByName(parks, "Indiana Dunes")) //  { name: "Indiana Dunes", rating: 4.1 }



/* 
.filter() -> loop through the array to find the all the elements that matches a condition and will return to you an array of these elements
  - accepts a callback function just like .forEach and .find() does
  - the callback function accepts parameters for element and index, just like .forEach and .find() does
  - the callback function has to return a condition. the filter() method will stop after going through a full array
  - .filter() will return the ARRAY that contains elements where the condition returns true on.......OR if no elements gets a truthy condition, it will return an empty array
*/

function getHighRatedParks(parks=[],rating){
  const result =  parks.filter((element, index)=>{
    return element.rating > rating
  })

  return result;
}


/* 
[
  { name: "Grand Canyon", rating: 5 },
  { name: "Gateway Arch", rating: 4.5 },
]

*/
// console.log(getHighRatedParks(parks, 4.3))
// console.log(getHighRatedParks(parks, 5)) //[]


/* 
.map() -> loop through the array to transform each element to something else without modifying the original dataset
  - accepts a callback function just like .forEach and .find() does
  - the callback function accepts parameters for element and index, just like .forEach and .find() does
  - the callback function can return anything that we want each element from the original array to "map" or "transform" into
  - .map() will return the ARRAY that contains transformed elements (of whatever is returned from the callback)
*/

function getParkNames(parks = []){
  const result =  parks.map((element, index)=>{

    //whatever we return, is what the current element will be mapped to
    return element.name
  })
  return result;
}

// console.log(getParkNames(parks))

function getParkSummary(parks = [], rating){
  //if the park rating is higher than given rating "ParkNameHere is great choice for you!" or if not, it will say "ParkNameHere has a low rating for you. Don't go"

  const result =  parks.map((element, index)=>{

    //whatever we return, is what the current element will be mapped to
    if(element.rating > rating){
      return `${element.name} is a great choice for you!`
    }else{
      return `${element.name} has a low rating for you. Don't go.`
    }
  })
  return result;
}

// console.log(getParkSummary(parks, 4.3))



/* 
.some() -> loops through the array to check if "at least one" or "some" elements match the condition in the .some()'s callback function
  - accepts a callback function just like .forEach and .find() does
  - the callback function accepts parameters for element and index, just like .forEach and .find() does
  - the callback function needs to return a CONDITION.
  - .some() will return TRUE  if any of the elements match that condition in the callbackfunction  or FALSE if NONE of the elements match the condition in the cb
*/


function isAnyParkRatedHigherThanGivenRating(parks=[], rating){
  const result = parks.some((element, index)=>{

    //return a condition
    return element.rating > rating
  })
  return result;
}

// console.log(isAnyParkRatedHigherThanGivenRating(parks, 3.8)) //true
// console.log(isAnyParkRatedHigherThanGivenRating(parks, 5.8)) //false


/* 
.every() -> loops through the array to check if "every" element matches the condition in the .every()'s callback function
  - accepts a callback function just like .forEach and .find() does
  - the callback function accepts parameters for element and index, just like .forEach and .find() does
  - the callback function needs to return a CONDITION.
  - .every() will return TRUE if every one of the elements match that condition in the cb, or FALSE if even one element does not match teh condition in the cb
*/


function isEveryParkRatedHigherThanGivenRating(parks=[], rating){
  const result = parks.every((element, index)=>{

    //return a condition
    return element.rating > rating
  })
  return result;
}


console.log(isEveryParkRatedHigherThanGivenRating(parks, 4.5)) //true
// console.log(isEveryParkRatedHigherThanGivenRating(parks, 5.8)) //false
