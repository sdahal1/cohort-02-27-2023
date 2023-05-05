const express = require("express");
const morgan = require("morgan");
const cuid = require("cuid");

const app = express();

const logger = require('./logger');

// Import data store
const { cards, decks } = require("./dataStore");


// -- PIPELINE STARTS HERE ---

// Middleware
app.use(morgan("dev"));
app.use(express.json());

// pull in my decks router and mount it onto the app
const decksRouter = require('./decks/decks.router');
app.use("/decks", decksRouter);

// Routes
const cardsRouter = require('./cards/cards.router');
app.use('/cards', cardsRouter);

// Error Handler
app.use(function errorHandler(error, req, res, _next) {
  console.error(error);
  const status = error.status || 500;
  const message = error.message || "Internal Server Error";
  logger.error(message);

  res
    .status(status)
    .json({ error: message });
});

module.exports = app;