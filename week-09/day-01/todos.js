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
    'completed': false,
    'text': text
  }
  return newTodo;
}

app.post('/todos', function(req, res) {
  con.query('INSERT INTO todolist VALUE (0, 0, "' + req.body.text + '", 0, 0)', function(err,row){
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

// function checkInCheckOut(id, checked) {
//   if (checked === 1) {
//     return 0;
//   } else {
//     return 1;
//   }
// };


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
// app.delete('/todos/:id', function(req, res) {
//   con.query('UPDATE todolist SET destroyed=1 WHERE id=' + Number(req.params.id) +' ;', function(err, result){
//     if(err) {
//       console.log(err);
//       return;
//     }
//     res.send(createNewTodo(Number(req.params.id), req.body.text));
//   });
// });

// deleting all tasks ------>>>

// app.delete('/todos/', function(req, res) {
//   con.query('UPDATE todolist SET destroyed=1;', function(err, result){
//     if(err) {
//       console.log(err);
//       return;
//     }
//     res.send(createNewTodo(Number(req.params.id), req.body.text));
//   });
// });
// ---------- >

// app.get('/todos/:id', function(req, res) {
//   con.query(storedInfos.filter(function(e) {
//     if (e.id === req.param.id){
//       e.completed = true
//       e.text = req.body.text
//       return e
//     }
//   })[0]);
// });
//

// app.delete('/todos/:id', function(req, res) {
//   var item = todoList.filter(function (e) {
//     if (e.id === +req.params.id) {
//       e.destroyed = true;
//       todoList.splice(todoList.indexOf(e), 1);
//       return e;
//     }
//   })[0];
// errorHandling(res, item);
// });
//
// function errorHandling(res, item) {
//   if (item === undefined) {
//     res.sendStatus(404);
//   } else {
//     res.send(item);
//   }
// }

// app.get('/todos/:id', function(req, res) {
//   con.query('SELECT * FROM todos WHERE id = ""', function(err, result){
//     console.log(result);
//     res.send(result);
//   })
// });
//   res.send(storedInfos.filter(function(e) {
//     if (parseInt(e.id) === parseInt(req.params.id)) {
//       return (e);
//     }
//   }));
// });
// app.get('/todos/:id', function(req, res) {
//   con.query('SELECT * FROM todolist WHERE destroyed =0' + req.params.id, function(err,row){
//     if(err) {
//       console.log(err.toString());
//       return;
//     }
//     errorHandling(res, row[0]);
//   });
// });
