'use strict';

var fs = require('fs');

// create a function takes three parameters:
//  - fileName: the name of the file
//  - letter: a character
//  - cb: callback (with two parameters: error and the result)
//
// it should read the file and count the letters in the content
// and it should call the callback with the counted number
// if there is some error it should call the callback with the error

function countcharacters(fileName, letter, cb){
  fs.readFile(fileName,'UTF8', function(err, content) {
    if (err) {
      return cb(err);
    }
    var counter = 0
    String(content).split('').forEach(function(e){
    if (letter === e){
      counter++;
    }
    })
    cb(counter)

  });
}
countcharacters('kecske.txt', 'e', function(err, content) {
  console.log(err, content);
});
