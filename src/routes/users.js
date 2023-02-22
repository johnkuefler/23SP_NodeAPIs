var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController.js');

/* GET users listing. */
router.get('/', function (req, res, next) {
  usersController.users_list(req, res);
});

router.post('/create', function (req, res, next) {
  usersController.user_create(req, res);
});

router.patch('/update', function (req, res, next) {
  usersController.user_update(req, res);
});

router.delete('/delete', function (req, res, next) {
  usersController.user_delete(req, res);
});

router.get('/page', function (req, res, next) {
  res.render('users');
});

module.exports = router;
