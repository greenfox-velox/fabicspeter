'use strict';

var getWordCnt = require('./getWordCnt');
var tape = require('tape');

tape('steup the testing', function(t){
  t.equal(getWordCnt('aa'), {a: 2});
  t.end();
});
