//import axios
const axios = require("axios");

const BASE_URL = "http://localhost:5000"

//create a new player named steph curry. But only create this player if the dataset does not contain a player with the name steph curry already

function createPlayerIfNotExists(body={}){
  //to see the dataset to check if the dataset contains a player with the name of "steph curry" for example, we need to make a get request
  return axios.get(`${BASE_URL}/players`)
    .then((response)=>{
      const playersArray = response.data;
      
      const foundPlayer = playersArray.find((playerObj)=>{
        return playerObj.name === body.name
      })

      //if foundPlayer doest not exist, then we can make a post request
      if(!foundPlayer){
       axios.post(`${BASE_URL}/players`, body)
        .then((response)=>{
          console.log(response.data)
        })
        .catch((err)=>{
          console.log(err)
        })
      }else{
        throw "Player already exists, try another player"
      }

    })
    .catch((err)=>{
      console.log("Error with your request-",err)
    })
}



function createPlayerIfNotExistsBetterWay(body={}){
  //to see the dataset to check if the dataset contains a player with the name of "steph curry" for example, we need to make a get request
  return axios.get(`${BASE_URL}/players`)
    .then((response)=>{
      const playersArray = response.data;
      
      const foundPlayer = playersArray.find((playerObj)=>{
        return playerObj.name === body.name
      })

      //if foundPlayer doest not exist, then we can make a post request
      if(!foundPlayer){
        return axios.post(`${BASE_URL}/players`, body)
      }else{
        throw "Player already exists, try another player"
      }
    })
    .then((response)=>{
      console.log("response from post request", response.data)
    })
    .catch((err)=>{
      console.log("Error with your request-",err)
    })
}


const newPlayer = {
  "name": "Draymond Green",
  "team": "Warriors",
  "number_championships": 4,
  "state": "California"
}


createPlayerIfNotExistsBetterWay(newPlayer)