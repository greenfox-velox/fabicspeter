'use strict'

var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "red123",
  database: "bookstore"
});
con.connect(function(err){
 if(err){
   console.log('Error connecting to Db');
   return;
 }
 console.log('Connection established');
});
con.query('SELECT * FROM author;', function(err,rows){
 if (err) {
   console.log(err.toString());
   return;
 }
 console.log('Data received from Db:\n');
 console.log(rows);
});
con.query('SELECT book_name FROM book_mast;', function(err,rows){
 if (err) {
   console.log(err.toString());
   return;
 }
 console.log('Data received from Db:\n');
 console.log(rows);
});

con.end(function(err) {
});
