const express = require('express');

const dinosaursRouter = express.Router();
const controller = require('./dinosaurs.controller');
const methodNotAllowed = require('../errors/methodNotAllowed');


dinosaursRouter.route('/')
  .get(controller.list)
  .post(controller.create)
  .all(methodNotAllowed);

dinosaursRouter.route('/:dinosaurId')
  .get(controller.read)
  .delete(controller.destroy)
  .all(methodNotAllowed);

module.exports = dinosaursRouter;
