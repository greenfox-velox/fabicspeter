'use strict'

var express = require('express');
// var app = express();
var https = require('https');
var xml2js = require('xml2js');
var parser = new xml2js.Parser();
var convert = require('xml-js');
var app = new (require('express'))()
var port = process.env.PORT || 8080
app.use(express.static('client'));



var data = '';


https.get('https://www.ecb.europa.eu/stats/eurofxref/eurofxref-hist-90d.xml', function(res) {
  if (res.statusCode >= 200 && res.statusCode < 400) {
    res.on('data', function(data_) {
      data += data_.toString();
    });
    res.on('end', function() {
      parser.parseString(data, function(err, result) {
      });
    });
  }
});
app.get('/data', function(req, res){
  var result1 = convert.xml2json(data, {compact: true, spaces: 4});
  res.send(result1);
});

app.listen(port, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
  }
})

// app.listen(8080, console.log('Im listening on port 8080'));
