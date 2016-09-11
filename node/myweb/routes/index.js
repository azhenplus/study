var express = require('express');
var router = express.Router();

/* GET home page. 渲染页面*/
router.get('/', function(req, res, next) {
  //参数,   (页面,变量)
  res.render('index', { title: '王真',name:'吴多'});
});

module.exports = router;
