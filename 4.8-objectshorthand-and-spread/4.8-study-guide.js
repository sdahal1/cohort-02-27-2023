
/* 
write a function named updatePlayer() that will accept a team name like "Celtics" and a player object like this: 
let player = {
    firstName: "Lebron",
    lastName: "James",
    points: 32000,
    teams: ["Cavs", "Heat"]
  }


And it will return a new object like this containing the team name added to the list of teams

{
  fullName: 'Lebron James',
  points: 32000,
  teams: [ 'Cavs', 'Heat', 'Lakers' ]
}


*/

let player0 = {
  firstName: "Lebron",
  lastName: "James",
  points: 32000,
  teams: ["Cavs", "Heat"]
}

function updatePlayer(player, teamName) {
  // player.teams.push(teamName);
  const {firstName, lastName, teams, points} = player
	return {
    fullName: `${firstName} ${lastName}`,
    points,
    teams: [...teams, teamName]
  }

  // return {
  //   ...player,
  //   teams: [...teams, teamName]
  // }
}

console.log(updatePlayer(player0, "Lakers"))



/* 

Write a function named joinTeams() that will take two different player objects and will return an array containing the teams of both players like this: [ 'Cavs', 'Heat', 'Hornets', 'Clippers', 'Rockets', 'Suns' ]


*/

function joinTeams(playerA, playerB) {
  // const allBooks2 = [...ownedBooks, ...wishlist]
  const {teams} = playerA;
  const {teams:otherTeams} = playerB;

  return [...teams, ...otherTeams]
}



let player1 = {
    firstName: "Lebron",
    lastName: "James",
    points: 32000,
    teams: ["Cavs", "Heat"]
}

let player2 = {
    firstName: "Chris",
    lastName: "Paul",
    points: 1800,
    teams: ["Hornets", "Clippers", "Rockets", "Suns"]
}

// console.log(updatePlayer(player1, "Lakers"))
console.log(joinTeams(player1, player2))
