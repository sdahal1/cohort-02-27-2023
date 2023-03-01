const tournament1 = {
  "Game 1": { homeTeam: 100, awayTeam: 85 },
  "Game 2": { homeTeam: 98, awayTeam: 100 },
  "Game 3": { homeTeam: 50, awayTeam: 51 },
  "Game 4": { homeTeam: 10, awayTeam: 8 },
};
const tournament2 = {
  "Game 1": { homeTeam: 100, awayTeam: 85 },
  "Game 2": { homeTeam: 98, awayTeam: 100 },
  "Game 3": { homeTeam: 50, awayTeam: 51 },
  "Game 4": { homeTeam: 10, awayTeam: 8 },
};



// Input
// Your input for both functions will be team

// calculateTotalPoints
//The calculateTotalPoints function will take in the tournament object and return a total number of points scored from all teams in all games
function calculateTotalPoints(tournamentInput){
  //get the values from the tournament object
  const arrayOfValues = Object.values(tournamentInput)
  // console.log(arrayOfValues)

  //initialize a totalsum variable
  let total = 0;
  //loop through the array of objects
  for(let game of arrayOfValues){
    total += game.homeTeam;
    total += game.awayTeam;
  }
  return total
}

// console.log(calculateTotalPoints(tournament1))



// printGameSummarys
// The printGameSummarys function will take in the tournament object and return a string, joined by \n, of the game results for each game

// For example:

function printGameSummarys(tournament){
  // ${keyGoesHere}: Home team ${'beat' or 'lost to'} the away team ${hometeamscore}-${awayteamscore}

  let finalResult = '';
  //loop through the object and have access to both the keys and values
  for(let key in tournament){
    // console.log(key);
    // console.log(tournament[key].homeTeam)
    // console.log(tournament[key].awayTeam)
    //if the hometeam score is greater than awayteamscore, magic word is "beat", otherwise magic word is "lost to"
    let magicWord;
    if(tournament[key].homeTeam > tournament[key].awayTeam){
      magicWord = "beat"
    }else{
      magicWord = "lost to"
    }

    let currentGameSummary = `${key}: Home team ${magicWord} the away team ${tournament[key].homeTeam}-${tournament[key].awayTeam}. \n`
    
    //add the currentGameSummary to the finalResult
    finalResult += currentGameSummary;

  }

  return finalResult

}

 console.log(printGameSummarys(tournament1)); //> "Game 1: Home team beat the away team 100-85 \n Game 2: Home team lost to the away team 98-100 \n etc;"