'use strict';

var numbers = [4, 5, 6, 7, 8, 9, 10]
// write your own sum functionS
function szum_the_list(x){
  var n = 0
  var a = 0
  while (x[n]) {
    (a += x[n]);
    n += 1;
  } return a
}
console.log(szum_the_list(numbers));
