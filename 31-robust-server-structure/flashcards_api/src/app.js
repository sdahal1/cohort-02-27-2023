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
app.get("/cards", (_req, res, _next) => {
  res
    .json({ data: cards });
});

app.post("/cards", (req, res, next) => {
  const { data } = req.body;
  if (!data) {
    const message = `Body must have 'data' key`;
    return next({ status: 400, message });
  }

  const { front, back, deckId } = data;

  // Validate required fields are present
  const requiredFields = ["front", "back", "deckId"];
  for (const field of requiredFields) {
    if (!data[field]) {
      const message = `'${field}' is required`;
      return next({ status: 400, message });
    }
  }

  // Validate deck exists
  const deck = decks.find(d => d.id === deckId);
  if (!deck) {
    const message = `Deck id ${deckId} does not exist.`;
    return next({ status: 400, message });
  }

  // Create an ID
  const id = cuid();

  const card = {
    id,
    front,
    back,
    deckId,
  };

  cards.push(card);
  logger.info(`Card with id ${id} created`);

  res
    .status(201)
    .json({ data: card });
});

app.get("/cards/:cardId", (req, res, next) => {
  const { cardId } = req.params;
  const card = cards.find(c => c.id === cardId);

  // make sure we found a card
  if (!card) {
    const message = `Card with id ${cardId} not found.`;
    return next({ status: 404, message });
  }

  res.json({ data: card });
});

app.delete("/cards/:cardId", (req, res, next) => {
  const { cardId } = req.params;
  const cardIndex = cards.findIndex(c => c.id === cardId);

  if (cardIndex === -1) {
    const message = `Card id ${cardId} does not exist`;
    return next({ status: 404, message });
  }

  cards.splice(cardIndex, 1);
  res
    .status(204)
    .send();
});

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