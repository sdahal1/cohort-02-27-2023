const express = require('express');
const router = express.Router();
const controller = require('./decks.controller');

const cardsRouter = require('../cards/cards.router')
// attach all our route handlers to that router

router.route("")
  .get(controller.list)
  .post(controller.create);

// router.get("/decks", controller.list);
// router.post("/decks", controller.create);

router.route("/:deckId")
  .get(controller.read)
  .delete(controller.destroy);

router.use('/:deckId/cards', cardsRouter);
// router.get("/decks/:deckId", controller.read);
// router.delete("/decks/:deckId", controller.destroy);

// export the router

module.exports = router;
