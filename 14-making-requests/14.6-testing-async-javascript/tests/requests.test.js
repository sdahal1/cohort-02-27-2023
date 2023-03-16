const axios = require("axios");
const { index } = require("../src/requests");
const BASE_URL = "http://localhost:5000";

describe("requests.js", () => {
  describe("index()", () => {

    beforeEach(() => {
      jest.spyOn(axios, "get");
    });

    afterEach(() => {
      jest.clearAllMocks();
    });
    
    const imitationCrabData = [
      {
        id: "HwLvy2S",
        name: "Ursa Minor",
        meaning: "Little Bear",
        starsWithPlanets: 6,
        quadrant: "NQ3",
      },
      {
        id: "dFBbdkr",
        name: "Vela",
        meaning: "Sails",
        starsWithPlanets: 7,
        quadrant: "SQ2",
      },
      {
        id: "dFBfdr",
        name: "Moon",
        meaning: "Sails",
        starsWithPlanets: 17,
        quadrant: "SQ3",
      },
    ];

    it("should make a GET request to the appropriate URL", async () => {
      // Write code here
     
      //jest.spyOn means "monitor the index() function to check if it ever makes an axios.get() call and how it uses the axios.get()"
      // jest.spyOn(axios, "get");

      // index()
      //   .then(()=>{
        //     console.log("hi")
        
        //   })
      
      //call the function so jest can spy on the functions behavior
      await index()


      const expectedURL = `${BASE_URL}/constellations`;

      expect(axios.get).toHaveBeenCalledWith(expectedURL)

      //cancel the spy on the axios.get() b/c we don't need to look at it anymore 
      // jest.clearAllMocks();
    });

    it("should return a list of constellations with fewer than 10 stars with planets", async () => {
      // Write code here
      // jest.spyOn(axios, "get");

      
      //make a fake axios call and force that axios call to resolve the data defined in line 7. Force the axios call to give back response.data to be this static data from line 7 instead of the real response.data. IN other words, when the axios.get call happens, instead of using the real full response from the actual api, have the axios.get call resolve an object, that has the key data
      axios.get.mockImplementation(() => Promise.resolve({ data:imitationCrabData, status: 200, otherinfo:{} }));

      //response is the resolved promsise
      const response = await index()

      const expected = imitationCrabData.slice(0,2)
      expect(response).toEqual(expected);

    });

    it("should log an error to the console", async () => {
      // Write code here
      // jest.spyOn(axios, "get");

      //force the axios.get mock call to return a rejected promise
      axios.get.mockImplementation(() => Promise.reject({ message: "That ain't it fam."}));

      //spy on the console.error
      jest.spyOn(console,"error")

      //call the function
      await index()

      expect(console.error).toHaveBeenCalledWith("That ain't it fam.")
    });
  });
});
