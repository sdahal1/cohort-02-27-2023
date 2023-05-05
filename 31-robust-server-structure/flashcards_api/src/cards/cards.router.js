const express = require('express');

const controller = require('./cards.controller');

const router = express.Router({ mergeParams: true });
router.get("/", controller.list);

router.post("/", controller.create);

router.get("/:cardId", controller.read);

router.delete("/:cardId", controller.destroy);

module.exports = router;
