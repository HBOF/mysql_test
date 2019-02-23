var mysql = require('mysql');
 
var connection = mysql.createConnection({
    host    :'192.168.0.58',
    port : 3306,
    user : 'user',
    password : 'pass',
    database:'nadobang'
});
 
connection.connect();
 
connection.query('SELECT now()', 
    function(err, rows, fields) {
      if (err) throw err;
 
      console.log( rows );
    }
);
