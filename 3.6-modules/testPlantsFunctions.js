//import the findPlant function from findPlants.js
const {findPlantById,sayHi} = require("./findPlants");
// const sayHi = require("./findPlants")


let plants = [
  { id: 1, name: "Garden Rocket Arugula" },
  { id: 2, name: "Watercress" },
  { id: 3, name: "Royal Rose Radicchio" },
];

console.log(findPlantById(plants,2))
console.log(sayHi())
