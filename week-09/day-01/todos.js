'use strict'

var express = require('express');
var bodyParser = require('body-parser')
var mysql = require("mysql");
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('todoApp'));

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "red123",
  database: "todo"
});
con.connect(function(err){
  if(err){
    console.log("Error connecting to Db");
    return;
  }
  console.log("Connection established");
});

app.get('/todos', function(req, res){
  con.query('SELECT * FROM todolist WHERE destroyed =0;', function(err, result){
    if(err){
      console.log(err.toString());
    }
    res.send(result)
  });
});

function createNewTodo(id, text) {
  var newTodo = {
    'id': id,
    'completed': 0,
    'text': text
  }
  return newTodo;
}

app.post('/todos', function(req, res) {
  con.query('INSERT INTO todolist VALUE (0, 0, "' + req.body.text + '", 0)', function(err,row){
    if(err) {
      console.log(err);
      return;
    }
    res.send(createNewTodo(row.insertId, req.body.text));
  });
});

app.delete('/todos/:id', function(req, res) {
  con.query('UPDATE todolist SET destroyed=1 WHERE id=' + Number(req.params.id) +' ;', function(err, result){
    if(err) {
      console.log(err);
      return;
    }
    res.send();
  });
});

app.put('/todos/:id', function(req, res) {
  con.query('UPDATE todolist SET completed=1 WHERE id=' + Number(req.params.id) +';', function(err, result){
    if(err) {
      console.log(err);
      return;
    }
    res.send();
  });
});


app.listen(3000);
