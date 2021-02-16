'user strict';
var mysql = require('mysql');

//local mysql db pool connections
var pool = mysql.createPool({
    host:"localhost",
    user: "root",
    password: "password",
    database : 'online_class_system',
    connectionLimit:10
});

pool.getConnection(function(err) {
    if (err) throw err;
});

module.exports=pool;