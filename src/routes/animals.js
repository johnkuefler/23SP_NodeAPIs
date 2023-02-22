var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  let animal = {
    name: 'Cowboy',
    type: 'Doggo',
  };
  res.send(animal);
});

module.exports = router;
