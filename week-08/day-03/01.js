'use strict';

var fs = require('fs');

// create a function that takes a filename reads the content of the file
// and counts the words in it. It should not return the result, rather
// call a callback (its second parameter)
// The callback should have two parameters:
//  - err: the error object if anything wrong happened
//  - count: the word count

function wordCount(fileName, cb) {
  fs.readFile(fileName, function(err, content) {
    if (err) {
      return cb(err);
    }
    var count = String(content).split(/\s/g).forEach('');
    cb(null, count);
  });
}

wordCount('kecske.txt', function(err, c) {
  console.log(err, c);
});


// function wordsCounter(filename, func){
//   fs.readFile(filename, func)
// }
