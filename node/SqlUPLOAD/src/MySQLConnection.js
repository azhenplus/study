/**
 * Created by mac on 16/9/1.
 */
var mysql=require("mysql");
module.exports.createConnection=function(){
    return mysql.createConnection({
        host     : 'localhost',
        user     : 'me',
        password : 'secret',
        database : 'my_db'
    })
};
