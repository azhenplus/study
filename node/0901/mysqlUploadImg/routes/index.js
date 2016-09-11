var express = require('express');
var router = express.Router();
const mysqlConn=require("../src/MysqlConnection");
const Config = require("../src/Config")






/* GET home page. */
    /**
     * 获取首页
     * 连接数据库,判断
     * 获取数据库,判断
     * 数据无误时,根据获取的数据渲染页面
     *//

//获取首页
router.get('/', function(req, res,next) {
  //连接数据库,判断
  var conn=mysqlConn.createConnection();
  conn.connect(function(err){
    if(!err){
      //获取数据库,判断
      conn.query(`SELECT * FROM images`,function(err,rows){
        if(!err){
          //数据无误时,根据获取的数据渲染页面
          res.render('index', {
            title: 'Express' ,
            rows:rows
          });
        }
        else{
          res.json(err);
        }

        conn.end();
      })
    }
    else{
      res.json(err);
    }
  });

});

module.exports = router;
