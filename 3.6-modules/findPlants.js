function findPlantById(plants, id) {
  let result = null;
  for (let i = 0; i < plants.length; i++) {
    let plant = plants[i];
    if (plant.id === id) {
      result = plant;
    }
  }
  return result;
}

function sayHi(){
  console.log("hi")
}



//export your function so that another file can use this function from another file
module.exports = {
  findPlantById,
  sayHi
}


