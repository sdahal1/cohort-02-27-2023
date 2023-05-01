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

module.exports = app;
