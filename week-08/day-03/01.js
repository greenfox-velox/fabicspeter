'use strict';

var fs = require('fs');

// create a function that takes a filename reads the content of the file
// and counts the words in it. It should not return the result, rather
// call a callback (its second parameter)
// The callback should have two parameters:
//  - err: the error object if anything wrong happened
//  - count: the word count

function countLetter(err, count){
  var counter = 0
  console.log(String(count).split(" ").length);
  counter ++;
}
function wordsCounter(filename, func){
fs.readFile(filename, func)
}
wordsCounter('kecske.txt', countLetter)
console.log(55+5+5)
