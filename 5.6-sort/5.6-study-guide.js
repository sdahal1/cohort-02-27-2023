/* 
.sort()
    - accepts a callback function as an input (thats it for our purposes)
    - callback function parameters -> 1st param: an element, 2nd param: another element
    - callback returns a number (Negative num, 0, Postive num). Negative number-> a before b, positve number-> b before a
    - Modifies the original array



const parks = [
  { name: "Biscayne", rating: 4.2 },
  { name: "Grand Canyon", rating: 5 },
  { name: "Gateway Arch", rating: 4.5 },
  { name: "Indiana Dunes", rating: 4.1 },
];


example: parks.sort((parkA, parkB)=>{
    return parkB.rating - parkA.rating
})
If the number returned is negative, the first item (parkA) will be moved before the second item (parkB). The opposite is true if the number is positive. This iteration then continues, but with the second and third items. 




*/

/* Example 1: sorting numbers- given an array of numbers */
const nums = [23,4,12,77,-3,-5,1]

//Ascending
nums.sort((elementA, elementB)=>{
  return elementA - elementB;
})


//Descending example here
nums.sort((elementA, elementB)=>{
  return elementB - elementA;
})

// console.log(nums)


/* Example 2: sorting numbers- given an array of objects */
const parks = [
    { name: "Biscayne", rating: 4.2 },
    { name: "Grand Canyon", rating: 5 },
    { name: "Gateway Arch", rating: 4.5 },
    { name: "Indiana Dunes", rating: 4.1 },
  ];


parks.sort((elementA, elementB)=>{
  return  elementA.rating - elementB.rating
})

parks.sort((elementA, elementB)=>{
  return  elementB.rating - elementA.rating
})

// console.log(parks)




/* Example 3: Sorting strings */

//alphabetical
parks.sort((elementA,elementB)=>{
  return elementA.name < elementB.name ? -1 : 1
})

//reverse alphabetical
parks.sort((elementA,elementB)=>{
  return elementB.name < elementA.name ? -1 : 1
})

// console.log(parks)

// console.log("c" < "b") //false (because c is after b in alphabet)
// console.log("C" < "b") //true (because capital C is considered less than lowercase letters)


/* Example 4: Sort strings by length */

parks.sort((elementA,elementB)=>{
  return elementA.name.length - elementB.name.length
})

console.log(parks)