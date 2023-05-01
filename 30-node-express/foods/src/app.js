const express = require('express');
const app = express();

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

app.get('/foods/:food', (req, res, next) => {
  res.send(`${req.params.food} is a food`)
})

app.get('/foods/:food/:type', (req, res, next) => {
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
  // delicious.thisFunctionDoesNotExist();
  if (delicious === 'false') {
    res.send(`${req.params.sauce} is not delicious`);
  } else if (delicious === 'true') {
    res.send(`${req.params.sauce} is delicious`);
  } else {
    // not true or false??? bad request. error handling.
    next(`Please set delicious to either true or false (got ${delicious}).`);
  }
})

// error handling
app.use((error, req, res, next) => {
  console.log(error.message);
  res.send(error);
})

module.exports = app;
