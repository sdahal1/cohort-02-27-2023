//Throwing an array of errors
function findPlayerAveragePoints(players={}, name){
  const errors = []
  //if player name is not in the players object, have an error pushed to an array
  if(players[name] === undefined){
    errors.push("Name not found!")
  }
  //if player has not played any games, have an error pushed to an array
  else if(players[name].points.length === 0){
    errors.push("No games played so wachu want?");
  }
  //if player has played in less than 2 games, have an error pushed to an array
  else if(players[name].points.length < 2){
    errors.push("Not enough games played");
  }

  //if there are any errors in our array, then throw all the errors 
  if(errors.length > 0) throw errors;
  //if there are no errors in our array, return the player Average points
  const points = players[name].points;
  const total = points.reduce((accumulator,element)=>{
    accumulator+= element
    return accumulator
  },0)

  return total/points.length;

}


let players = {
  "Lebron": {
      points: [30,22,32,26],
      team: "Lakers"
  },
  "Jordan": {
      points: [36,30,30,34],
      team: "Bulls"
  },
  "Rob": {
      points: [],
      team: "JavaScript-ers"
  },
  "Durant": {
      points: [25],
      team: "Nets"
  }
}

// console.log(findPlayerAveragePoints(players, "Lebron"))
// console.log(findPlayerAveragePoints(players, "Luka"))
// console.log(findPlayerAveragePoints(players, "Rob"))
console.log(findPlayerAveragePoints(players, "Durant"))


console.log("last line")

