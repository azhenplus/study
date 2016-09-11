var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    if(req.session.currentUser){
        res.render('index', {
            title: '主页',
            currentUser:req.session.currentUser
        });
    }else{
        res.render('users/login')
    }

});

module.exports = router;
