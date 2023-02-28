/* Difference between let and const and var */

//var-> dont use it anymore


/* 
let vs const

let -> when you want to declare a variable, but that variable can be re-assigned
const -> when you want to declare a variable, but that variable cannot be re-assigned

*/


//declaring x using let
let x;

//assign value to x
x = 3

x = 10

console.log(x)

//declaring y and assigning it a value using let
let y = 5



//delcaring a variable using const cannot be reassigned once its assigned a value
const GOAT = "Lebron James";

// console.log(GOAT)
// GOAT = "Jordan"

//const for arrays, you can still push and pop from the array, just no reassignment using the "="
const artists = ["Drake", "Taylor Swift", "Beatles"]

artists.push("Rihanna")
artists.pop()
//.unshift() and .shift() also work if you want to insert and remove from front of array
artists[0] = "Drakes last name idk"

console.log(artists)

const person1 = {
  name: "Mel",
  favLang: "html",
  dreamCompany: "Google"
}

person1.name = "Mel H.";
person1.yearsExperience = "10";

// console.log(person1)




var foods = ['sushi', 'lentil soup', 'smoothie']


for(let i = 0; i< 10; i++){
    let statement = `We are in iteration number ${i+1}`
    console.log(statement)
    if(i > 5){
      statement = "Woah big number time! "
    }
}


let num = 5
num++ //num = num + 1




