const moment = require('moment');
var faker = require('faker');

console.log("************* starting the server!!!");


console.log("The current date is: " + moment().format("MMMM Do, YYYY"));


function generateTeam(){
  return {
    teamName: faker.company.companyName(),
    primaryColor: faker.commerce.color(),
    secondaryColor: faker.commerce.color(),
    city: faker.address.city()
  }
}


console.log(generateTeam())