const axios = require("axios");
const BASE_URL = "http://localhost:5000";

function update(id, body) {
  if (!id || !body) return Promise.reject(new Error("Need id and body to update player"));
  const url = `${BASE_URL}/players/${id}`;
  return axios.put(url, body)
}


const updatedInfo = {
  "name": "Chef Curry Tha Don",
  "team": "Lakers",
  "number_championships": 5,
  "state": "California"
}


// update(2,updatedInfo)
//   .then(responseFromPutRequest=>{
//     console.log(responseFromPutRequest.data)
//   })


//if the only line of code inside of a .then or .catch is a console.log(dataFromresponse)....then you can write it this way as well. So you could input a function as an argument to the .then() or .catch(), and the inputted function will use the response as the input


update(2,updatedInfo)
  .then(console.log)
  .catch(console.log)

update()
  .then(responseFromPutRequest=>{
    console.log(responseFromPutRequest.data)
  })
  .catch((error)=>{
    console.log(error)
  })


