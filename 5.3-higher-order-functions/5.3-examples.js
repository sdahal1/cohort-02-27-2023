/* 
A higher order function is a function that either: 
  1. accepts a function as an input (parameter) --> callback function
  2. returns a function as an output --> closure



Callback function-> a function that is given as an input to another function 
*/



let parks = [
  { name: "Biscayne", rating: 4.2 },
  { name: "Grand Canyon", rating: 5 },
  { name: "Gateway Arch", rating: 4.5 },
  { name: "Indiana Dunes", rating: 4.1 },
];


const logPark = (park) => {
  console.log(park.name)
}

// for (let i = 0; i < parks.length; i++) {
//   logPark(parks[i]);
// }
/* 
.forEach -> you can only do this on arrays
  .forEach() accepts a function as an input (callback function)
  .forEach() will iterate through the array, and it will pass each element in the array to the callback function and call it
  .forEach() -> the callback function in forEach can accept parameters. 1st parameter represents each ELEMENT. 2nd parameter reperesnts each index number
*/
parks.forEach(logPark)

parks.forEach(function(element){
  console.log(element.name)
})

parks.forEach((park, idx)=>{
  console.log(park.rating, idx)
})



