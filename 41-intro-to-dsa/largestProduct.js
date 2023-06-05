// R - Repeat problem
// E - Example input/output
// A - Approach
// C - Coding
// T - Testing/Code review
// O - Follow-up questions/ Optimization


// function findLargestProduct(numbers) {
//     if (numbers.length < 2) {
//       return null;
//     }
    
//     // Initialize the maximum product as the product of the first two numbers
//     let maxProduct = numbers[0] * numbers[1];
    
//     for (let i = 0; i < numbers.length; i++) {
//       for (let j = i + 1; j < numbers.length; j++) {
//         // Update the max product if a larger product is found
//         if (numbers[i] * numbers[j] > maxProduct) {
//           maxProduct = numbers[i] * numbers[j];
//         }
//       }
//     }
    
//     return maxProduct;
// }
  
//   // Example usage:
//   const numbers = [1, 5, 3, 4, 2];
//   const largestProduct = findLargestProduct(numbers);
//   console.log(largestProduct); // Output: 20

const thisThing = [1, 5, 3, 4, 2, 6,6,10,-11]
//O(n log n)
// function multiplier(array=[]){
//     array.sort();
//     // array.sort((a,b) => b-a)
//     array.reverse(); // 5,4,3,2,1,-6,-6
//     let answer = array[0] * array[1];
//     console.log(answer);
//     return answer;
// }

// multiplier(thisThing);

// function largestNumber(arr) {
//     const sortedArr = arr.sort((a, b) => Math.abs(a) - Math.abs(b));
//     const result =
//         sortedArr[sortedArr.length - 1] * sortedArr[sortedArr.length - 2];
//     return Math.abs(result);
//     //variables highest numbers and lowest nums
//     //multipy and return biggest
// }

// console.log(largestNumber(thisThing))'

// function findLargestProduct(nums) {
//     let firstNum = 0
//     let secondNum = 0
  
//     for (let i = 0; i < nums.length; i++) {
//       const num = nums[i];
//       if (num >= firstNum) {
//         secondNum = firstNum;
//         firstNum = num;
//       } else if (num > secondNum) {
//         secondNum = num;
//       }
//     }
  
//     return firstNum * secondNum;
//   }
  
//   // Example usage:
//   const numbers = [1, 9, 5, 2, 7, 9];
//   const largestProduct = findLargestProduct(numbers);
//   console.log(largestProduct);

// Given an array of numbers, find the largest product formed by two of the numbers. For example, 
// if the input array is [1, 5, 3, 4, 2], the largest product that can be formed by two of the numbers is 20, 
// which is the product of 5 and 4. Can you write code to solve this problem?

// should i throw an error
// what if the array is empty  []
// duplicate? give me both operands
// negative nums are fine return me those
// assume the array is at least 2 el and always numbers



function largestProduct(arr) {
    if (arr.length < 2) {
      return undefined;
    }
  
    let largest = -Infinity;
    let secondLargest = -Infinity;
    let smallest = Infinity;
    let secondSmallest = Infinity;
    for (let i = 0; i < arr.length; i++) {
      const value = arr[i];
      if (value > largest) {
        secondLargest = largest;
        largest = value;
      } else if (value > secondLargest) {
        secondLargest = value;
      }
      if (value < smallest) {
        secondSmallest = smallest;
        smallest = value;
      } else if (value < secondSmallest) {
        secondSmallest = value;
      }
    }
  
    const largestProduct = largest * secondLargest;
    const smallestProduct = smallest * secondSmallest;
  
    if (largestProduct > smallestProduct) {
      return largestProduct;
    }
    else {
      return smallestProduct;
    }
}
[1, 9, 5, 2, 7, 9];