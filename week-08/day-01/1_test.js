'use strict';

var getWordCnt = require('./getWordCnt');
var tape = require('tape');

tape(function(t){
  t.deepEqual(getWordCnt.getWordCnt('aa'), {a: 2});
  t.end();
});
