/* 
Use this api endpoint: https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false



Write a function that accepts no parameters, and returns a promise that resolves the top 5 cryptocurrenty coins by the "price_change_percentage_24h" property.

Have the output be an array of coin objects where each coin object looks like this (example of bitcoin): 

{
  name: "Bitcoin",
  current_price: 28000,
  price_change_percentage_24h: 1.8163
}


Limit the output to the top 5 coins by price_change_percentage_24h


*/