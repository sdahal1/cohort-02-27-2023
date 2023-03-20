const axios = require("axios");
const BASE_URL = "http://localhost:5000";


function getDataAboutSomePlayers(ids=[]){
  const arrayOfPromises = ids.map((id)=>{
    return axios.get(`${BASE_URL}/players/${id}`)
      // .then(response=>{
      //   return response.data
      // })
  })

  console.log(arrayOfPromises)

  return Promise.all(arrayOfPromises)
  .then((responseArray)=>{
    console.log(responseArray)
    //this .then() will only run if every one of those promises from teh array of promises resolved. If any one pending promise did not resolve (reject), then the .then() will not fire
    const responseDataArray = responseArray.map((fullResponse)=>{
      return fullResponse.value.data
    })
    return responseDataArray;
  })
  .catch((err)=>{
    //If any one pending promises did not resolve (reject), then the .catch() will fire
    console.log("err is this", err.message)
    return err.message;
  })


}


getDataAboutSomePlayers([1,3000,5])
  .then(info=>{
    console.log('info is this', info)
  })
