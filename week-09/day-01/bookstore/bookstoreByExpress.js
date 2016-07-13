'use strict';

var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser')


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "red123",
  database: "bookstore"
});

app.get('/', function(req, res) {
   con.query('SELECT DISTINCT book_name FROM bookstore;',function(err,rows){
     if(err) {
       console.log(err.toString());
       return;
     }
     res.send(rows);
   });
 });
 app.get('/s', function(req, res) {
    con.query('SELECT book_name FROM bookstore;',function(err,rows){
      if(err) {
        console.log(err.toString());
        return;
      }
      res.send(rows);
    });
  });
 app.listen(3000);
