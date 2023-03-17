const axios = require("axios");

const BASE_URL = "http://localhost:5000"


function updatePlayerIfExists(id, body){

  return axios.get(`${BASE_URL}/players/${id}`)
    .then((response)=>{
      console.log("successfully found", response.data);
      return axios.put(`${BASE_URL}/players/${id}`, body)
    })
    .then((responseFromUpdate)=>{
      console.log("responseFromUpdate.data from updating", responseFromUpdate.data)
      return responseFromUpdate.data;
    })
    .catch(err=>{
      console.log("error-", err.message)
      return err.message
    })
}


const updatedInfo = {
  "name": "Chef Curry Best shooter of all time",
  "team": "Celtics",
  "number_championships": 5,
  "state": "California"
}

updatePlayerIfExists(2, updatedInfo)