'use strict';

// create a function that takes a string and a letter and returns a boolean
// it should return true if the string consits the given letter, false otherwise
var cs = 'k'
var csstr = 'valami'

function x_y_valami(char, some_string){
  return some_string.split('').some(function(e) {
    if (char === e){
      return true
    }
  });
}
console.log(x_y_valami(cs, csstr));
