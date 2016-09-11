/**
 * Created by mac on 16/9/3.
 */
var express = require('express');
var router = express.Router();
const md5=require('js-md5');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

//用作数据库的交换...前端的
router.post("/register",function(req,res){
    //console.log(req.body);  前台传回的数据

    //保存前端传回的    数据到数据库中function()
    req.models.user.create({
        register:req.body.register,
        password:md5(req.body.password)
    },function(err){
        //传递回前端的数据
        if(!err){
            res.json({state:1,message:'success'}); //操作成功
        }else{
            if(err.errno==1062){
                res.json({state:1062,message:"用户名已存在"})
            }else{
                res.json({state:2,message:"can not insert a user"})
            }
        }
    });
});

//登录页面用于与后台数据交换的接口
router.post("/login",function(req,res){
    //从数据库中寻找用户
    req.models.user.find({register:req.body.register},function(err,rows){
        if(rows.length){
            var user=rows[0];
           if(md5(req.body.password)==user.password){
               //登录成功时,用session存储用户的登录状态
               req.session.currentUser=user.register;
               req.session.currentUserId=user.id;
               res.json({state:1,message:"登录成功"});
           }else{
               res.json({state:4,message:"密码错误"});
           }
        }else{
            res.json({state:3,message:"不存在该用户" +
            ""})
        }
    })
});
module.exports = router;
