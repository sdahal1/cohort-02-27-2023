/*
1. 


Given an array of Food items, print each item using forEach
["Calamari", "Sweet Potato Fries", "Green Smoothie", "Fried Chicken", "Cookies", "Broccoli"]
*/


const foods = ["Calamari", "Sweet Potato Fries", "Green Smoothie", "Fried Chicken", "Cookies", "Broccoli"]
//                 0               1                 2 

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


// for(let rapperObject of rappers){
//   const {name, moneyEarnedFromRapping, fireLevel} = rapperObject
//   //drake earned 100000 from rapping and the songs are firelevel of 10
//   console.log(`${name} earned ${moneyEarnedFromRapping} from rapping and the songs are firelevel of ${fireLevel}`)
// }


// rappers.forEach((rapperObject,idx)=>{
//   const {name, moneyEarnedFromRapping, fireLevel} = rapperObject
//   //drake earned 100000 from rapping and the songs are firelevel of 10
//   console.log(`${name} earned ${moneyEarnedFromRapping} from rapping and the songs are firelevel of ${fireLevel} - index number ${idx}`)
// })

/*

3. use forEach to add up the fireLevels of the artists above and give back the totalfire and averageFire

*/
function getTotalFireLevel(rappers){
  let total = 0;
  rappers.forEach((rapperObject,idx)=>{
    //each rapperObject is an object so we can add up fireLevel property 
    total+= Number(rapperObject.fireLevel);
  })
  console.log("total fire is this", total);

  console.log("average is", total/rappers.length)

}

console.log(getTotalFireLevel(rappers))


// ["a", "b", "c"].join(", ") //"a, b, c"
/*
4. use forEach to build a statement from given data above "My top rappers list are: Drake, Lupe Fiasco, Rob D, and they are all fuego.
*/

function buildRapperDescription(rappers=[]){
  // "My top rappers list are: Drake, Lupe Fiasco, Rob D, and they are all fuego."
  let result = "My top rappers list are: "

  rappers.forEach((rapperObject,idx)=>{
    //if we are at the last index, we will not put the comma, otherise, there will be a comma
    // if(idx === rappers.length-1){
    //   result += `${rapperObject.name} `;
    // }else{
    //   result += `${rapperObject.name}, `;
    // }

    (idx === rappers.length-1)
      ? result += `${rapperObject.name} `
      : result += `${rapperObject.name}, `
  })

  result += "and they are all fuego."
  console.log(result)

}

buildRapperDescription(rappers);

/*
5. use forEach to log the moneyEarnedFromRapping for each artist above and format using the dollar sign to show amount in dollars

*/


function findTotalMoneyEarnedFromRappers(rappers){
  rappers.forEach((rapperObject)=>{
    console.log(`$${rapperObject.moneyEarnedFromRapping.toFixed(2)}`)
  })
}

findTotalMoneyEarnedFromRappers(rappers)











