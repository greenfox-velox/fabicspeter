'use strict';
// create a function that returns it's input factorial

function factorial_counter(x){
  var factor = 1
  while (x >= 1) {
    (factor *= x);
    x --;
  }return factor
}
console.log(factorial_counter(20));
