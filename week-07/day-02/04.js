'use strict';

var af = [4, 5, 6, 7];
// print all the elements of af, dont use for or while :)
af.forEach(function(e) {
  console.log(e);
});

var nsa = (function(e) {console.log(e * 10)});

af.map(nsa)
