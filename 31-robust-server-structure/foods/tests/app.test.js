const request = require('supertest');
const app = require('../src/app');
const fruits = require('../src/data/fruits');

beforeEach(() => {
  // clear out the fruits array
  fruits.splice(0, fruits.length);
})
describe('list fruits', () => {
  // where we add tests
  test('sends an empty array when there are no fruits', async () => {
    // set up our data - what "should" the app.js be able to see
    // the data is already set up for this test - there are no fruits

    // make a fake request to the route we're trying to test
    const response = await request(app).get('/fruits');
    // make assertions that the response we got matches the data we set up earlier
    // Math.floor(response.statusCode / 100) === 2
    expect(response.statusCode).toEqual(200);
    expect(response.body.data).toEqual([]);
  })
  test('sends the fruits when there are fruits in the array', async () => {
    // set up our data
    let fruit = {
      id: 17,
      name: 'honeydew',
      description: 'green melon'
    };
    fruits.push(fruit)
    // make request
    const response = await request(app).get('/fruits');
    // assert about response
    expect(response.statusCode).toEqual(200);
    expect(response.body.data).toEqual([fruit]);
  })
})

describe('create fruit', () => {
  
})