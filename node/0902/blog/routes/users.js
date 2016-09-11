var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//注册页面
//配置当前目录下的register路由  渲染页面
router.get('/register',function(req,res){
  //渲染views下的某个页面
  res.render("users/register");
});

//登录页面
router.get('/login',function(req,res){
  res.render("users/login");
});

//发表文章页面
router.get('/article',function(req,res){
  res.render("users/article");
});
module.exports = router;
