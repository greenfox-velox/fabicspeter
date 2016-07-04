'use strict';

var string_split = require('./string_split');
var tape = require('tape');

tape(function(t){
  t.equal(string_split.string_split('aa'), {a: 2});
  t.end();
});
