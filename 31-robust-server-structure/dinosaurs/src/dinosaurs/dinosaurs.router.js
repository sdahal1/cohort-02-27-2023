const express = require('express');

const dinosaursRouter = express.Router();
const controller = require('./dinosaurs.controller');

dinosaursRouter.route('/')
  .get(controller.list)
  .post(controller.create);

dinosaursRouter.route('/:dinosaurId')
  .get(controller.read);

module.exports = dinosaursRouter;