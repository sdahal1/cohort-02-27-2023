// Problem: You are given a list of daily share prices for a stock. What is the
// maximum profit you could have made by buying a stock on one day, and selling
// on another?

// [7, 1, 5, 3, 6] -->   1-6 = 5
// [7, 6, 5, 4, 3] --> 0 
// [] --> 0

// each number is a day M-F and the num is a closing price
// you cant go backwards


// function maxProfits(array){
//     const arrayOfProfits = []
//     for(let i = 0; i < array.length - 1; i++){     
//         for(let j = i+1; j < array.length; j++){
//             let profit = array[i] - array[j]
//             arrayOfProfits.push(profit)
//         }
//     }
//     return Math.abs(arrayOfProfits.sort((a,b) => a-b).slice(0,1))
// }
//                            l  
// console.log(maxProfits([7, 1, 5, 3, 6]));

function calculateMaxProfit(prices) {
    let profit = 0; 
    // lowest price 7
    // is this number lower if so make that lowest price
    // updating profit with whatever is lowest

    //  if (max > 0) {
    //     return max;
    //   } else {
    //     return 0;
    //   }
  
    for (let i = 0; i < prices.length - 1; i++) {
      let slicedArray = prices.slice(i, i + 2);
      let daysProfit = slicedArray[1] - slicedArray[0];
      
      if (daysProfit > profit) {
        profit = daysProfit;
      }
    }
  
    return profit;
}