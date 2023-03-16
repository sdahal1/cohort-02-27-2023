const axios = require("axios");
const BASE_URL = "http://localhost:5000";
//get, post, put, delete

//get all players -> it returns a promise that resolves to response.data
function getAllPlayers(){
  //what does an axios call return? --> promise
  return axios.get(`${BASE_URL}/players`)
    .then((response)=>{
      // console.log(response.data)
      return response.data //[arrayof player objects]

    })
}
// getAllPlayers()
//     .then((players)=>{
//         console.log("players is this", players)
//     })


function showOnePlayer(id){
  return axios.get(`${BASE_URL}/players/${id}`)
    .then((response)=>{
      console.log("hit the .then")
      // console.log(response.data)
      return response.data
    })
    .catch((error)=>{
        console.log("hit the .catch")
        return error.message
    })
    

}


// showOnePlayer(1000)
//   .then((onePlayer)=>{ //the .then()'s cb parameter will represent whatever was returned form teh previous .then OR the previous .catch, depending on which one it hit
//     console.log("one player variable is this", onePlayer)
//   })


function createPlayer(body){
  return axios.post(`${BASE_URL}/players`,body)
    .then((response)=>{
        console.log(response.data)
        return response.data
    })
}

const newPlayerToAdd = {
  "name": "Rob",
  "favoriteLanguage": "javascript"
}

// createPlayer(newPlayerToAdd)

// console.log("bye")


function updatePlayer(body, id){
  return axios.put(`${BASE_URL}/players/${id}`, body)
    .then((response)=>{
      console.log(response.data)
      return response.data
    })
    .catch((error)=>{
      console.log("errorrrrr", error.message)
      return error.message
    })
}


const updatedInformation =  {
  "name": "The Goat Lebron",
  "team": "Heat",
  "number_championships": 6,
  "state": "Miami"
}

// updatePlayer(updatedInformation, 1)


function deletePlayer(id){
  return axios.delete(`${BASE_URL}/players/${id}`)
    .then((response)=>{
      console.log("successfully deleted players with id of ", id)
      return id;
    })
}


deletePlayer('XJvuFmO')