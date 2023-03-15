//axios is a tool that lets us make api requests (api calls)
const axios = require("axios"); //import axios



function getAllPlayers(){
  axios.get("http://localhost:5000/players")
    .then((response)=>{
      console.log(response.status) //200
      console.log(response.data) //response.data is the body of the response you see on postman
    })
}

function getAllWinningPlayers(num){
  //axios.get(apiendpointgoeshere) -> axios calls return a promise, so we have to use .then() to see the response from an api call
  axios.get("http://localhost:5000/players")
    .then((response)=>{
      // console.log(response.status) //200
      // console.log(response.data) //response.data is the body of the response you see on postman
      const winningPlayers = response.data.filter((playerObj)=>{
        return playerObj.number_championships > num
      })

      console.log(winningPlayers)
    })
}





// console.log(getAllPlayers())
console.log(getAllWinningPlayers(2))


console.log("code to load up something else")
