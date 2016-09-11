var express = require('express');
var router = express.Router();
const connection=require("../src/MySQLConnection");
const Config=require("../src/Config");
const multer=require('multer');
const upload=multer({dest:})

/* GET home page. */
router.get('/', function(req, res, next) {
  var conn=connection.createConnection();
  conn.connect(function(err){
    if(!err){
      conn.query(`SELECT * FROM ${Config.IMAGES_TABLE}`)
    }else{
      res.json(err);
    }
  });
  res.render('index', { title: 'Express' });
});

module.exports = router;
