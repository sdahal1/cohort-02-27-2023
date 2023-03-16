const axios = require("axios");
const BASE_URL = "http://localhost:5000";

function index() { //get all constellations that have less than 10 stars with planets
  return axios
    .get(`${BASE_URL}/constellations`)
    .then(({ data }) => {
      const result = data.filter((constellation) => {
        return constellation.starsWithPlanets < 10;
      });
      return result;
    })
    .catch(({ message }) => {
      console.error(message);
    });
}

// index()
//   .then((info)=>{
//     console.log(info)
//   })


function create(body) {
  return axios
    .post(`${BASE_URL}/constellations`, body)
    .then(({ data }) => data)
    .catch(({ message }) => {
      console.error(message);
    });
}

function show(id) {
  return axios
    .get(`${BASE_URL}/constellations/${id}`)
    .then(({ data }) => data)
    .catch(({ message }) => {
      console.error(message);
    });
}

module.exports = {
  index,
  create,
  show,
};
