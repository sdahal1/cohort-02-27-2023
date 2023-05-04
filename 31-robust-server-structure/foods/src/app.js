const express = require('express');
const app = express();

// CRITICALLY IMPORTANT for accepting POST/PUT/PATCH requests
app.use(express.json());

// In every code path of every piece of middleware and/or route handler, we must do one of 3 things:
// 1. send a response with res.send()
// 2. call next() to move on
// 3. call next('some argument') to go into error handling


// middleware
// log each incoming request
app.use((req, res, next) => {
  console.log('a request came in', req.path);
  // now move on to the next function
  next();
})
// defining a route:
// HTTP method (get)
// path ("/")
// what to do when a request comes in (function)
app.get("/", (req, res, next) => {
  res.send('This is the food app');
})

app.get("/granola", (req, res, next) => {
  doesNotExist();
  res.send('granola is a great breakfast');
})

app.get('/hello', (req, res, next) => {
  // destructuring with a default value
  // v fancy
  let { name = 'user' } = req.query;
  res.send(`Hello, ${name}!`);
})

app.get('/foods/favorites', (req, res, next) => {
  res.send('My favorite foods are cheese and banana muffins');
})

function checkFoodLength(req, res, next) {
  let { food } = req.params;
  if (food.length < 2) {
    // errors, sadness
    next({
      message: "Foods must have at least 2 characters.",
      status: 400
    });
  } else {
    next();
  }
}

app.get('/foods/:food', checkFoodLength, (req, res, next) => {
  res.send(`${req.params.food} is a food`)
})

app.get('/foods/:food/:type', checkFoodLength, (req, res, next) => {
  res.send(`${req.params.food}, type ${req.params.type} is a food`);
})

// app.get('/sauce/:sauce', (req, res, next) => {
//   res.send(`${req.params.sauce} sauce is delicious`)
// })

// your route should work at a url like
// /sauce/bernaise
// and should send back
// bernaise sauce is delicious
app.get('/sauce/:sauce', (req, res, next) => {
  let { delicious = "true" } = req.query;
  if (delicious === 'false') {
    return res.send(`${req.params.sauce} is not delicious`);
  } else if (delicious === 'true') {
    return res.send(`${req.params.sauce} is delicious`);
  } else {
    // not true or false??? bad request. error handling.
    return next({
      message: `Please set delicious to either true or false (got ${delicious}).`,
      status: 400
    });
  }
})



// fruits stuff

const fruits = require('./data/fruits.js');

// route /fruits that sends in the response all of the fruit data

function validateFruitExists(req, res, next) {
  let fruit = fruits.find(fruit => fruit.id === Number(req.params.id));
  if (fruit) {
    next();
  } else {
    next({
      status: 404,
      message: `Could not find fruit with id ${req.params.id}`
    })
  }
}

// list
app.get('/fruits', (req, res, next) => {
  res.send({ data: fruits });
})

// read
app.get('/fruits/:id', validateFruitExists, (req, res, next) => {
  let { id } = req.params;
  // make sure the data type is number
  id = Number(id);
  // look into the fruits array and find one with that ID
  let fruit = fruits.find(f => f.id === id);
  // send it back as the response
  res.send({ data: fruit });
})

// create
let nextId = 7;
app.post('/fruits', (req, res, next) => {
  // for POST requests, the data we want is in the request body
  let { data } = req.body;
  // add an ID, since that's the server's job
  data.id = nextId;
  // update the nextId for the next time
  nextId++;
  // save the data into our fruits array
  fruits.push(data);
  res.status(201).send({ data });
})

// update
app.put('/fruits/:id', validateFruitExists, (req, res, next) => {
  // find the fruit in the fruits array
  let fruit = fruits.find(fruit => fruit.id === Number(req.params.id));
  // update its data using the request body
  let { name, description } = req.body.data;
  fruit.name = name;
  fruit.description = description;
  // send back the updated data
  res.send(fruit);
})

// destroy
app.delete('/fruits/:id', validateFruitExists, (req, res, next) => {
  // find the index of the fruit we want to delete
  let id = Number(req.params.id);
  let index = fruits.findIndex(fruit => fruit.id === id);
  // delete the fruit
  fruits.splice(index, 1);
  // send a 204 status back.
  res.status(204).send();
})

// 404 handler
// if we haven't hit another good route by now,
// the route does not exist
// go into error handling
app.use((req, res, next) => {
  next({
    message: `404, route ${req.path} not found`,
    status: 404
  })
})

// error handling
app.use((error, req, res, next) => {
  const { message = 'There was an error', status = 500 } = error;
  console.log(error);
  res.status(status).send(message);
});

module.exports = app;
