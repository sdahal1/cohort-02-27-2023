const dinosaurs = require('../data/dinosaurs');

function list(req, res, next) {
  res.send({ data: dinosaurs })
}

function validateDataExists(req, res, next) {
  if (req.body.data) {
    next();
  } else {
    next({
      status: 400,
      message: "Please include a data object in your request body."
    })
  }
}

function createValidatorFor(field) {
  return function (req, res, next) {
    if (req.body.data[field]) {
      next();
    } else {
      next({
        status: 400,
        message: `Please include ${field} in the request data`
      })
    }
  }
}

let nextId = 4;
function create(req, res, next) {
  const { name, coolness, bigness } = req.body.data;
  let newDinosaur = {
    name,
    coolness,
    bigness,
    id: nextId
  };
  nextId++;
  dinosaurs.push(newDinosaur);
  res.status(201).send(newDinosaur);
}

function validateDinoExists(req, res, next) {
  let { dinosaurId } = req.params;
  dinosaurId = Number(dinosaurId);
  let dinosaur = dinosaurs.find(d => d.id === dinosaurId);
  if (dinosaur) {
    next();
  } else {
    next({
      status: 404,
      message: `Could not find dinosaur with id ${dinosaurId}`
    })
  }
}
function read(req, res, next) {
  let { dinosaurId } = req.params;
  dinosaurId = Number(dinosaurId);
  let dinosaur = dinosaurs.find(d => d.id === dinosaurId);
  res.send({ data: dinosaur })
}

let fields = ['name', 'coolness', 'bigness'];

module.exports = {
  list,
  // create: [validateDataExists, createValidatorFor('name'), createValidatorFor('coolness'), createValidatorFor('bigness'), create]
  create: [validateDataExists, ...fields.map(createValidatorFor), create],
  read: [validateDinoExists, read]
}