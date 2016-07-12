'use strict'

var express = require('express');

var app = express();

app.get('*', function(req, res) {
  var currentDate = new Date();
  var minutes = currentDate.getMinutes();
  var hours = currentDate.getHours();
  var seconds = currentDate.getSeconds();
  res.send(req.path + ' ' + req.method +' ' + hours + ':'+ minutes +':'+ seconds);
});

app.listen(3000);
