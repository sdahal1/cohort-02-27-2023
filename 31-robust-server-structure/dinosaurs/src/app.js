const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res, next) => {
  res.send('root');
})

const dinosaursRouter = require('./dinosaurs/dinosaurs.router');
app.use('/dinosaurs', dinosaursRouter);

// 404 handler
app.use((req, res, next) => {
  next({
    status: 404,
    message: `Could not find the path ${req.path}`
  })
})


// error handling
app.use((error, req, res, next) => {
  console.error(error);
  const { status = 500, message = 'Server error' } = error;
  res.status(status).send(message);
})

module.exports = app;
