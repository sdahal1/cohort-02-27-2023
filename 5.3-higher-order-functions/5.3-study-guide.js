/*
1. 


Given an array of Food items, print each item using forEach
["Calamari", "Sweet Potato Fries", "Green Smoothie", "Fried Chicken", "Cookies", "Broccoli"]
*/


const foods = ["Calamari", "Sweet Potato Fries", "Green Smoothie", "Fried Chicken", "Cookies", "Broccoli"]


//arrayNameHere.forEach((elementNameHere,indexNameHere)=>{

//})

// foods.forEach((foodName,idx)=>{
//   console.log(foodName)
// })


/*


2. use foreach() to loop through an array of objects and show their details- first just the name, then a whole description
[
  {
    name: "Drake",
    fireLevel: "10",
    moneyEarnedFromRapping: 10000000
  },
  {
    name: "Lupe Fiasco",
    fireLevel: "10",
    moneyEarnedFromRapping: 5000000
  },
  {
    name: "Rob D",
    fireLevel: "7",
    moneyEarnedFromRapping: -50
  }
];

*/
const rappers = [
  {
    name: "Drake",
    fireLevel: "10",
    moneyEarnedFromRapping: 10000000
  },
  {
    name: "Lupe Fiasco",
    fireLevel: "10",
    moneyEarnedFromRapping: 5000000
  },
  {
    name: "Rob D",
    fireLevel: "7",
    moneyEarnedFromRapping: -50
  }
];

rappers.forEach((rapperObject,idx)=>{
  const {name, moneyEarnedFromRapping, fireLevel} = rapperObject
  //drake earned 100000 from rapping and the songs are firelevel of 10
  console.log(`${name} earned ${moneyEarnedFromRapping} from rapping and the songs are firelevel of ${fireLevel}`)
})

/*

3. use forEach to add up the fireLevels of the artists above and give back the totalfire and averageFire

4. use forEach to build a statement from given data above "My top rappers list are: Drake, Lupe Fiasco, Rob D, and they are all fuego.

5. use forEach to log the moneyEarnedFromRapping for each artist above and format using the dollar sign to show amount in dollars

*/









