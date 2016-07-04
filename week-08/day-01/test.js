'use strict';

var add = require('./add');
var tape = require('tape');

tape(function(t){
  t.equal(add.add(1, 3), 4);
  t.end();
});
