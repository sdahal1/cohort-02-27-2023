/* For loops- use it when you know how many iterations you'll need */
// for (let i=0; i<=1000000; i++) {
//   console.log(`iteration ${i}`);
// }


//for-of loops -> loop through arrays with this
let nums = [23,24,3,8,77,6];

let teams = [
  {
    name: "Lakers",
    city: "Los Angeles",
    players: ["Lebron James", "Russell Westbrook", "Anthony Davis"],
    championships: 20
  },
  {
    name: "Warriors",
    city: "San Franscisco",
    players: ["Steph Curry", "Klay Thompson", "Andrew Wiggins"],
    championships: 5
  },
  {
    name: "Knicks",
    city: "New York",
    players: ["Carmelo", "Marbury"],
    championships: 3

  },
  {
    name: "Nets",
    city: "New York",
    players: ["Vince Carter", "Kevin Durant"],
    championships: 0
  }
]

// for(let i = 0; i< nums.length; i++){
//   console.log(i) //index
//   console.log(nums[i]) //element
// }

// for(let element of nums){
//   if(element === 8){
//     console.log("Kobe!")
//   }else{
//     console.log(element);
//   }
// }

// for(let team of teams){
//   console.log(team)
// }







//static vs dynamic key name
const user = {
  firstName: "Elon",
  lastName: "Musk",
  isVerified: true,
  lastPost: "We are hiring!"
}


const x = "firstName"
//console.log(user[firstName]) //reference error: firstName is not defined -> it looks for a variable called firstname
// console.log(user["firstName"]) //Elon
// console.log(user[x]) //Elon

// console.log(user.lastPost) //We are hiring!
// console.log(user.firstName) //elon
// console.log(user.x) //undefined



/* for-in loops-> use it to loop over the keys of objects */
const people = {
  "Lee Finch": { address: "913 Hunts Lane", isCustomer: true },
  rob: {address: "100 keep it 100 way", isCustomer: true},
  "Whitney Shawa": { address: "392 Norfolk Street", isCustomer: false },
  "Gabrielle Mayo": { address: "934 Engert Avenue", isCustomer: false }
};
// console.log(people["rob"]["address"])
// console.log(people['Lee Finch'].address)


for(let key in people){
  // console.log(people[key])
}


/* Transforming objects into arrays using Object.values() or Object.keys() */

//Object.keys(PutObjectHere)-> will return an array of keys from the object you referenced
console.log(Object.keys(user))
console.log(Object.keys(people))


//Object.values(PutObjectHere)-> will return an array of value from the object you referenced
console.log(Object.values(user))
console.log(Object.values(people))