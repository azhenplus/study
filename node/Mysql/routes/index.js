var express = require('express');
var router = express.Router();
var mysql=require("mysql");


/* GET home page. */
router.get('/', function(req, res, next) {
  var connection=mysql.createConnection("mysql://root@localhost/node");
  connection.connect(function(err,result){
    if(!err){
      var id=1;
      //connection.query("SELECT * FROM user WHERE id = ?",[id],function(err, rows, fields){
      connection.query("SELECT * FROM User",function(err, rows, fields){
        if(!err){
          res.render(
              'index',
              { title: '女王的列表',
                rows:rows

          });
        }else{
          res.json(err)
        }

      });

    }else{
      res.json(err);
    }
  });

});

module.exports = router;
