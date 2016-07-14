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

// app.get('/', function(req, res) {
//    con.query('SELECT book_name FROM book_mast;',function(err,rows){
//      if(err) {
//        console.log(err.toString());
//        return;
//      }
//      res.send(rows);
//    });
//  });
 app.get('/', function(req, res) {
    con.query('SELECT book_name, aut_name, cate_descrip, pub_name, book_price FROM book_mast JOIN author ON book_mast.aut_id = author.aut_id JOIN category ON book_mast.cate_id = category.cate_id JOIN publisher ON book_mast.pub_id = publisher.pub_id ;',function(err,rows){
      if(err) {
        console.log(err.toString());
        return;
      }
      res.send(rows);
    });
  });
 app.listen(3000);
