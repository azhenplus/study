/**
 * Created by mac on 16/8/30.
 */
var express = require('express');
var router = express.Router();
const multer=require('multer');
var fs=require('fs');

const upload = multer();


/* GET upload listing. */
router.post('/', upload.single("img"),function(req, res, next) {
    fs.writeFile(`public/static/images${req.file.originalname}`,req.file.buffer,function(err){
        if(!err){
            res.render('upload',{imageName:req.file.originalname})
        }else{
            res.send("can not save the file");
        }
    })

});

module.exports = router;


