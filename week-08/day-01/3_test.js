'use strict';

var Rectangle = require('./03').Rectangle;
var tape = require('tape');

tape(function(t){
  var kocka = new Rectangle(10, 20);
  t.deepEqual(kocka.getArea(), 200);
  t.deepEqual(kocka.getCircumference(), 60);
  t.end();
});
tape(function(t){
  var kocka = new Rectangle(10, 10);
  t.deepEqual(kocka.getArea(), 100);
  t.deepEqual(kocka.getCircumference(), 40);
  t.end();
});
