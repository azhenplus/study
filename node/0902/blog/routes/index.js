var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //用户登录   就欢迎用户渲染主页
  if(req.session.currentUser){
    res.render('index', {
      title: '主页',
      currentUser:req.session.currentUser
    });
  }else{
    //无用户登录时跳转到登录页面
    res.redirect("/users/login")
  }
});

module.exports = router;
