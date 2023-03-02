/* 
Scope has to do with variables and functions that are defined and their visibility based on where they were created
Things that create a scope are functions and loops/conditionals

Global scope- a variable or function that is not declared indise any other functions or blocks of code (loops, conditionals). It is declared outside of any function/block of code

functional scope- a variable or function that is created inside of a function-> its only available to reference withing that function. Its not visible outside of that function

block scope - a variable or function that is created inside of a loop/conditional (block)-> its only available to reference withing that block. Its not visible outside of that block


*/

//global scope
let x = 5;


function hi(){
    const firstName = "Rob"
    console.log("wazzaap " + firstName)
    // x++;
    // const x = "x gona give it to ya";
    // console.log("which x is it?", x)
}

// console.log(firstName)
hi()
const y = 10


console.log("x outside hi function", x)










const DISCOUNT_PERCENTAGE = 0.15;
const product = {
    name: "Black Longline T-Shirt",
    priceInCents: 1500,
    availableSizes: ["XS", "S", "XL", "XXL"],
};

if (DISCOUNT_PERCENTAGE > 0) {
    const multiplier = 1 - DISCOUNT_PERCENTAGE;
    const price = product.priceInCents * multiplier;
    console.log("price is", price);

} else {
    const price = product.priceInCents;
    console.log(price);
}

// console.log("price outside the block", price);


//functions create a scope

//top team code

const topTeam = {
    lakers: 50,
    celtics: 60,
    mavs: 30,
    clippers: 15,
};

let bestTeam = "";
let mostWins = 0;
for (let team in topTeam) {
    const wins = topTeam[team];
    if (wins > mostWins) {
        mostWins = wins;
        bestTeam = team;
    } 
}
// console.log("team outside loop", team)


function bye(){
    console.log("x is this", x)
}
bye()

console.log(bestTeam);





