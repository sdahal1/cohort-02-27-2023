const axios = require("axios");
const BASE_URL = "http://localhost:5000";

//write a function taht takes an id, and returns a promsie that resolves the found players name only
function getPlayerNameById(id){
  return axios.get(`${BASE_URL}/players/${id}`)
      .then((response)=>{
        // console.log(response)
        return response.data.name
      })
      .catch(err=>{
        return err.message
      })

}

//you can only use the async await syntax within a function

async function getPlayerNameById(id){
  try{
    //the variable pointing to the await axios.get() call will represent whatever was resolved by the axios.get() call
    const response = await axios.get(`${BASE_URL}/players/${id}`)
    // console.log("response is this", response)
    return response.data.name
  }catch(err){
    return err.message;
  }
}



// getPlayerNameById(1)
//   .then((info)=>{
//     console.log(info)
//   })

getPlayerNameById(1)
  .then(console.log)
  