/* 
Primitive types: String, boolean, numbers, null, undefined, 

Reference types: arrays, objects

*/


// with primitive types, if you create a variable that points to a primitive type, then you create a new and SEPARATE copy of the original
let title = "Mort";
let anotherTitle = title;


title+= "!"

console.log(title)
console.log(anotherTitle)



// with reference types, if you create a variable that points to a reference type, then you create a reference to the the original. It will NOT make a SEPARATE copy

let players = ["Lebron", "Messi", "Simone Biles", "Slash"]
let players2 = players // this does not make a copy, this will reference the same array that the "players" variable is pointing to
let players3 = [...players] // this creates a separate copy. So if you want to make a separate copy of a reference type, use the spread operater (...)
players.push("Rob"); //this is affect both players and players2, buT NOT players3

// console.log(players)
// console.log(players2)
// console.log(players3)

let user1 = {
  name: "Rob",
  favcolor: "Blue",
  favFood: "Thai",
  eatsTacosToo: true
}

let user2 = user1; //this will not creat a separete copy, it will reference the same obejct user1 is pointing to
let user3 = {...user1}

user3.name = "Lebron"
console.log(user1)
console.log(user2)
console.log(user3)




console.log("hi"==="hi") //with primitive types we compare the value
console.log(["hi"] === ["hi"]) //with referenct types we compare the memory address's reference









