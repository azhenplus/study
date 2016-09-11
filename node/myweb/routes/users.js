var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//action  子类页面
router.get('/login', function(req, res, next) {
  res.send('log in page');
});

router.get('/register', function(req, res, next) {
  res.send('register in page');
});
module.exports = router;
