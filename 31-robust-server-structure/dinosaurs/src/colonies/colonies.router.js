const express = require('express');

const controller = require('./colonies.controller');
const methodNotAllowed = require('../errors/methodNotAllowed');
const dinosaursRouter = require('../dinosaurs/dinosaurs.router');
const router = express.Router();

router.route('/')
  .get(controller.list)
  .all(methodNotAllowed);

router.use('/:colonyId/dinosaurs', dinosaursRouter)


module.exports = router;