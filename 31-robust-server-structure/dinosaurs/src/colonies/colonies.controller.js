const colonies = require('../data/colonies');

function list(req, res, next) {
  res.send({ data: colonies })
}

module.exports = {
  list
}