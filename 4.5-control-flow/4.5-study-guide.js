/*
  Modify each function below to continue working with the suggested syntax.
  
  When a function's parameters reference `team`, it is referring to an object. Each object has the following shape:

   {
     name: "Lakers",
     city: "Los Angeles" ,
     stars: [ "Lebron James", "Russell Westbrook", "Anthony Davis"]
   }
*/



// Use a conditional (ternary) operator below.
function checkIfStarIsOnTeam(team, player) {
  // if(team.stars.includes(player)){
  //   return true
  // }else{
  //   return false
  // }

  return team.stars.includes(player)
  ? true
  : false
}

// Use a `switch` statement below.
function generateChampionBanner(team, numberChampionships) {
  let banner;
  switch(numberChampionships){
    case(0):
      banner = `${team.name} has yet to prove themselves`
      break;
    case(1):
      banner = `${team.name} has is a city of champions!`
      break;
    case(2):
      banner = `${team.name} has 2 so far!`
      break;
    default:
      banner = `Dynasty for ${team.name}`
      break;
  }

  return banner;


}


let team = {
  name: "Lakers",
  city: "Los Angeles" ,
  stars: [ "Lebron James", "Russell Westbrook", "Anthony Davis"]
}

// console.log(checkIfStarIsOnTeam(team, "Michael Jordan")) //false
// console.log(checkIfStarIsOnTeam(team, "Anthony Davis")) //true


console.log(generateChampionBanner(team, 10)) //teamnamehere is a dynasty
console.log(generateChampionBanner(team, 0)) //teamnamehere has yet to prove them selves
console.log(generateChampionBanner(team, 1)) //teamnamehere is the city of Championships!


