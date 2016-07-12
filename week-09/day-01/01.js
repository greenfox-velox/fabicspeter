'use strict'

var http = require('http');


var server = http.createServer(function(req, res) {
  var path = req.pathname;
  res.writeHead(200, {'Content-Type': 'text/plain'});
  var currentDate = new Date();
  var minutes = currentDate.getMinutes();
  var hours = currentDate.getHours();
  var seconds = currentDate.getSeconds();
  res.end(req.url +' ' + req.method +' ' + hours + ':'+ minutes +':'+ seconds);
});


server.listen(3000, '127.0.0.1');
