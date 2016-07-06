'use strict'

var fs = require('fs');

fs.readFile('kecske.txt', function(err, c){
  console.log(String(c));
});
console.log('for elott');
for (var i = 0; i < 10000000; i++){
  i + 3;
}
console.log('valami');
