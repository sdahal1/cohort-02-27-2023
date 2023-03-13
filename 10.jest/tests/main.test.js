//import the functions we want to test
const {getAverageRating, getTopRatedArtist, assignGrade, splitHighRatedArtistsFromLowRatedArtists} = require("../src/main");


//mocha-> lets you write unit tests using describe() and it()
//import chai-> chai is an assertion library -> lets you compare expected data with actual data and trigger the test to fail if the comparison fails
// const expect = require("chai").expect;


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

//describe() -> typically used to nest all the tests for a particular function or file (in this case each describe will be for a function)
//params: string(description of the function name), callback function
describe("getAverageRating", () => {
  //tests for getAvarageRating will go here.

  //we will test the happy path
  it("Should get average rating fixed to 2 decimal places when valid data input is provided", () => {
   

    //define the expected output 
    const expected = 8.08;

    const actual = getAverageRating(artists)

    //a test will only pass if all the assertions with expect are truthy
    // expect(actual).to.equal(expected) //mocha chai way
    expect(actual).toBe(expected)
    //to assert that the data type is a number, we can use to.be.a
    // expect(actual).to.be.a("number") //number, string
    // expect(actual).toBeInstanceOf(Number)
    expect(typeof actual).toBe("number");

    // expect({}).to.be.a("object");
  });

  //we will test the edge cases as well

  it("Should return 0 if artists array is empty", ()=>{
    const artists = [];

    const expected = 0;

    const actual = getAverageRating(artists);

    expect(actual).toBe(expected)

  })
})


describe("getTopRatedArtist", ()=>{
  //it correctly return the correct artist element
  it("it correctly return the correct artist element", ()=>{
    const expected = { name: "Beatles", rating: 10 }

    const actual = getTopRatedArtist(artists)

    expect(actual).toEqual(expected) //deeply compare-> arrays and object
  })


  //if the artists array is empty, it will return null
  it("returns null if array is empty", ()=>{

    const actual = getTopRatedArtist([])
    // expect(actual).to.equal(null)
    expect(actual).toBeNull()
    
  })
})

// describe("assignGrade", ()=>{
//   it("should give correct grade of A when a decimal number is given", ()=>{
//     const expected = "A"
//     const actual = assignGrade(0.9);
//     expect(actual).to.equal(expected)
//   })

//   it("should give correct grade of B when a decimal number is given", ()=>{
//     const expected = "B"
//     const actual = assignGrade(0.8);
//     expect(actual).to.equal(expected)
//   })

//   it("should give correct grade of B when a decimal number is given", ()=>{
//     const expected = "C"
//     const actual = assignGrade(0.7);
//     expect(actual).to.equal(expected)
//   })

// })


// describe("splitHighRatedArtistsFromLowRatedArtists", ()=>{
//   it("should split the artists into two sub arrays", ()=>{
//     const expected = [
//       [
//         { name: "Taylor Swift", rating: 9 },
//         { name: "Drake", rating: 9.8 },
//         { name: "J Cole", rating: 8 },
//         { name: "Kendrick Lamar", rating: 8.5 },
//         { name: "Beatles", rating: 10 },
//       ],
//       [
//         { name: "Rob", rating: 6.25 },
//         {
//           name: "Random guy from beach who asked me to follow his sound cloud",
//           rating: 5,
//         },
//       ]
//     ]
//     const actual = splitHighRatedArtistsFromLowRatedArtists(artists, 7.5)
//     expect(actual).to.eql(expected)
//   })

//   it("should still work if all artists have over the given rating", ()=>{
//     const expected = [
//       [
//         { name: "Taylor Swift", rating: 9 },
//         { name: "Drake", rating: 9.8 },
//         { name: "J Cole", rating: 8 },
//         { name: "Rob", rating: 6.25 },
//         { name: "Kendrick Lamar", rating: 8.5 },
//         { name: "Beatles", rating: 10 },
//         {
//           name: "Random guy from beach who asked me to follow his sound cloud",
//           rating: 5,
//         },
//       ],
//       [
        
//       ]
//     ]
//     const actual = splitHighRatedArtistsFromLowRatedArtists(artists, 3)
//     expect(actual).to.eql(expected)
//   })

//   it("should still work if no artists are in dataset", ()=>{
//     const expected = [
//       [
        
//       ],
//       [
        
//       ]
//     ]
//     const actual = splitHighRatedArtistsFromLowRatedArtists([], 3)
//     expect(actual).to.eql(expected)
//   })

 

// })