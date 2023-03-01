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



/* for-in loops-> use it to loop over the keys of objects */
const people = {
  "Lee Finch": { address: "913 Hunts Lane", isCustomer: true },
  rob: {address: "100 keep it 100 way", isCustomer: true},
  "Whitney Shawa": { address: "392 Norfolk Street", isCustomer: false },
  "Gabrielle Mayo": { address: "934 Engert Avenue", isCustomer: false },
};

// console.log(people["rob"]["address"])
// console.log(people['Lee Finch'].address)



// const nums2 = [3,6,9,12]

// console.log(nums2[2])


for(let key in people){
  console.log(key) //keys
  console.log(people[key]) //values of the object
  // objectNameHere[keyhere] //gives you the value of the object at that key
  // console.log(people[key])
}


