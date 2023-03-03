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


console.log(findParkByName(parks, "Gateway To Hawaii")) //undefined
console.log(findParkByName(parks, "Indiana Dunes")) //  { name: "Indiana Dunes", rating: 4.1 }

