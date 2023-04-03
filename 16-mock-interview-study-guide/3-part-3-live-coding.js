/* 
Example Problem 1: 

For this use the CoinGecko Api to find market data for crypto coins.

getCoinMarketData()

Create a function called getCoinMarketData that takes a string as a parameter. The string represents a crypto currency coin such as "bitcoin", or "ethereum", or "solana"

The API endpoint will be similar to this endpoint to get bitcoin information: https://api.coingecko.com/api/v3/coins/bitcoin

Make sure to make the API call update based on the coin name that is passed into getCoinMarketData.

The function should return the market_data object from the result of the API call.

An example output would be

getCoinMarketData('bitcoin') /* ->
  
{
    "current_price": {
      "aed": 70733,
      "ars": 2980147,
      "aud": 30582,
      "bch": 178.634,
      "bdt": 1959024,
      "bhd": 7261.67,
      "bmd": 19257.73,
      "bnb": 70.727,
      "brl": 101677,
      "btc": 1.0,
      "cad": 26438
      ...other coins removed for brevity

}, 
...other keys related to market data removed for brevity
*/
const axios = require('axios');
const baseUrl = 'https://api.coingecko.com/api/v3/coins'

function getCoinMarketData(coinName){
  console.log(`${baseUrl}/${coinName}`)
}

console.log(getCoinMarketData("ethereum"))

/* 
Top most common bugs that result in failed interviews:
1. function forgets to return the axios call
2. If there are parameters in the function, failing to use that parameter in the api call
*/




// function getCoinMarketData(coinName=''){
//   return axios.get(`https://api.coingecko.com/api/v3/coins/${coinName}`)
//     .then((fullResponse)=>{
//         return fullResponse.data.market_data
//     })
//     .catch((err)=>{
//       console.log("Oops try again")
//       return err.message
//     })
// }



//the test will call the function and check to see if the function will return a promise that resolves the data that is in the instructions

// getCoinMarketData("bobcat")
//   .then((answer)=>{
//     console.log("answer is this", answer)
//   })

  //full response, coin info, final result



