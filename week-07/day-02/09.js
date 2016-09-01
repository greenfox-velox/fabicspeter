'use strict';

// create a function that takes a string and counts its letters
// it should return an object thats keys are the letters and the values are
// the counts.
// example: "apple" -> {a: 2, p: 2, l: 1}
function letter_counter(s){
  var letters = {}
  s.split('').forEach(function(e){
    if (!(e in letters)){
      letters[e] = 1
    }else{
      letters[e] ++
    }
  });var size = 0, key;
    for (key in letters) {
        if (letters.hasOwnProperty(key)) size++;
    }
    return size;
}
console.log(letter_counter('appla'));
