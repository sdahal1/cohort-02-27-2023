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
  let index = dinosaurs.findIndex(d => d.id === Number(req.params.dinosaurId));
  if (index > -1) {
    let dinosaur = dinosaurs[index];
    // save the dinosaur that we found for future use
    res.locals.dinosaur = dinosaur;
    res.locals.index = index;
    next();
  } else {
    next({
      status: 404,
      message: `Could not find dinosaur with id ${dinosaurId}`
    })
  }
}

function read(req, res, next) {
  // use the saved dinosaur from inside the validator function
  const { dinosaur } = res.locals;
  res.send({ data: dinosaur })
}

function destroy(req, res, next) {
  // find the dinosaur to destroy
  let { index } = res.locals;
  // splice it out of the array
  dinosaurs.splice(index, 1);
  // send back a 204
  res.status(204).send();
}

let fields = ['name', 'coolness', 'bigness'];

module.exports = {
  list,
  // create: [validateDataExists, createValidatorFor('name'), createValidatorFor('coolness'), createValidatorFor('bigness'), create]
  create: [validateDataExists, ...fields.map(createValidatorFor), create],
  read: [validateDinoExists, read],
  destroy: [validateDinoExists, destroy]
}