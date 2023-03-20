const axios = require("axios");
const BASE_URL = "http://localhost:5000";


//write a function that accepts an array of ids, and it will create delete requests for each id and returns a promise that will only resolve once every promise (delete request) in the array of delete requests resolve
function bulkDeletePlayers(ids=[]){
  //get post put delete

  const arrayOfDeleteRequests = ids.map((id)=>{
    return axios.delete(`${BASE_URL}/players/${id}`)
      .then(response=>{
        return id;
      })
  })
  
  return Promise.all(arrayOfDeleteRequests)

}


bulkDeletePlayers([1,3,5])
  .then((responseArray)=>{
    console.log(responseArray)
  })
  .catch(err=>{
    console.log("error happened", err.message)
  })