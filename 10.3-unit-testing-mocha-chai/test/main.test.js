//import the functions we want to test
const getAverageRating = require("../src/main");
//mocha-> lets you write unit tests using describe() and it()
//import chai-> chai is an assertion library -> lets you compare expected data with actual data and trigger the test to fail if the comparison fails
const expect = require("chai").expect;
//describe() -> typically used to nest all the tests for a particular function or file (in this case each describe will be for a function)
//params: string(description of the function name), callback function
describe("getAverageRating()", () => {
  //tests for getAvarageRating will go here.

  //we will test the happy path
  it("Should get average rating fixed to 2 decimal places when valid data input is provided", () => {
    const artists = [
      { name: "Taylor Swift", rating: 9 },
      { name: "Drake", rating: 9.8 },
      { name: "J Cole", rating: 8 },
      { name: "Rob", rating: 6.25 },
      { name: "Kendrick Lamar", rating: 8.5 },
      { name: "Beatles", rating: 10 },
      {
        name: "Random guy from beach who asked me to follow his sound cloud",
        rating: 5,
      },
    ];

    //define the expected output 
    const expected = 8.08;

    const actual = getAverageRating(artists)

    //a test will only pass if all the assertions with expect are truthy
    expect(actual).to.equal(expected)
    //to assert that the data type is a number, we can use to.be.a
    expect(actual).to.be.a("number") //number, string

    // expect({}).to.be.a("object");
  });

  //we will test the edge cases as well

  it("Should return 0 if artists array is empty", ()=>{
    const artists = [];

    const expected = 0;

    const actual = getAverageRating(artists);

    expect(actual).to.equal(expected)

  })
});
