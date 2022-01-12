
//const mysql = require('mysql2');
import mysql from 'mysql2';
 

const conn = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'faq_tinon',
        password:"",
      });




conn.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

export default conn;


