var express = require('express');
var app=express();       //express() 是一个由 express 模块导出的入口（top-level）函数

var http = require('http').Server(app);
var io=require("socket.io")(http);

//app.get('/', function(req, res){
//    res.send('<h1>Hello MODEL</h1>');
//});

app.get('/', function(req, res){
    res.sendfile('index.html');
});


io.on('connection', function(socket){
    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
    });
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});


