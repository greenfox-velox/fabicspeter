'use strict';

// create a function that takes a string and counts its letters
// it should return an object thats keys are the letters and the values are
// the counts.
// example: "apple" -> {a: 1, p: 2, l: 1, e: 1}

function string_split(string){
  var letters = {}
  string.split('').forEach(function(e){
    if (!(e in letters)){
      letters[e] = 1
    }else{
      letters[e] ++
    }
  });return letters
}
console.log(string_split('alma'));

module.exports.string_split = string_split;
