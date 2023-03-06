/* 
Use case for .reduce() -> accumulator pattern (calculate total sum, accumulate onto a datatype)
.reduce()
    -takes a callback fn AND a starting value to accumulate onto
    - callback function parameters -> 1st param: accumulator, 2nd param: each element, 3rd param: each index
    - if no value is provided as the intial value for accumulator, it will default to being the first element in the array
    - callback returns the new value for the accumulator
    - does not modify original array -> store output in variable or return the .reduce() call
    - outputs the final value of the accumulator
*/

const areas = [768, 1004.2, 433.1];


function findTotal(areas){
  let total = 0;
  for(let i = 0;i<areas.length; i++){
    const element = areas[i];
    total += element
  }
  return total;
}


function findTotalWithReduce(areas){
  const totalSum = areas.reduce((accumulator,element,index)=>{
    // console.log(`Accumulator is ${JSON.stringify(accumulator)}. Element is ${element}. Index is: ${index}`)
    return accumulator + element
  },0)

  return totalSum
}
// console.log(findTotalWithReduce(areas));



const parks = [
  { name: "Acadia", areaInSquareKm: 100 },
  { name: "Crater Lake", areaInSquareKm: 500 },
  { name: "Kenai Fjords", areaInSquareKm: 200 },
  { name: "Zion", areaInSquareKm: 500 },
];


function findTotalParkSquareKmWithReduce(parks){
  const totalSum = parks.reduce((accumulator, element, index)=>{
    // console.log(`Accumulator is ${JSON.stringify(accumulator)}. Element is ${element}. Index is: ${index}`)

    //whatever you return is what  accumulator becomes set to
    return accumulator + element.areaInSquareKm;
    // return 5
  },0)

  return totalSum
}

// console.log(findTotalParkSquareKmWithReduce(parks))




function createParkInfoObject(parks){
  const result = parks.reduce((accumulator,element,index)=>{
    
    accumulator[element.name] = element.areaInSquareKm
    
    //whatever you return is what  accumulator becomes set to
    return accumulator
  },{})

  return result;
}

console.log(createParkInfoObject(parks))

// let x = {}

// x.name = "Rob"
// x["name"] = "Rob"
// console.log(x)