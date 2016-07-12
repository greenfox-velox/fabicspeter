'use strict'

var express = require('express');

var bodyParser = require('body-parser')
var app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


var storedInfos = [
    {
        'completed': false,
        'id': 1,
        'text': 'Buy milk'
    },
    {
        'completed': false,
        'id': 2,
        'text': 'Make dinner'
    },
    {
        'completed': false,
        'id': 3,
        'text': 'Save the world'
    }
]
app.get('/todos', function(req, res) {
  res.send(storedInfos);
});

app.get('/todos/:id', function(req, res) {
  res.send(storedInfos.filter(function(e) {
    if (parseInt(e.id) === parseInt(req.params.id)) {
      return (e);
    }
  }));
});

var currentID = storedInfos.length
function CreateNewTodoElemet(text){
  var newTodo = {
  'completed': false,
  'id': ++currentID,
  'text': text
}
  storedInfos.push(newTodo);
  return newTodo;
}
app.post('/todos', function(req, res) {
  res.send(CreateNewTodoElemet(req.body.text));
});
// app.post('/todos', function(req, res){
//  var counter = storedInfos.length;
//  req.body["id"] = counter + 1;
//  req.body["completed"] = false;
//  storedInfos.push(req.body);
//  res.json(storedInfos[storedInfos.length-1]);
// });

app.get('/todos/:id', function(req, res) {
  res.send(storedInfos.filter(function(e) {
    if (e.id === req.param.id){
      e.completed = true
      e.text = req.body.text
      return e
    }
  })[0]);
});

app.delete('/todos/:id', function(req, res) {
  for (var i = 0; i < todos.length; i++) {
    if (todos[i].id === +req.params.id) {
      todos[i]["destroyed"] = true;
      res.json(todos[i]);
      todos.splice(i, 1);
    }
  }
});



app.listen(3000);
