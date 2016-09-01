// function countTo100(x, cb) {
//   function cb() {
//     while (x < 10){
//       console.log('repa');
//     }
//   }
//   console.log('macik');
// }
// countTo100(1, function cb() {
//   while (x < 10){
//     console.log(x);
//   });
// }
'use strict';

 var ar = [1, 2, 3, 4, 5, 6, 7, 8]

function isBigEnough(value) {
return value >= 5;
}
var filtered = ar.filter(isBigEnough);

var reduced = [1, 2, 3, 4].reduce( (prev, curr) => prev * curr );

var total = [1, 2, 3].reduce(function(a, b) {
  return a * b;
}, 1);

console.log(total + ' - reduce');

console.log(reduced + ' - reduce also');

console.log(filtered + ' - filter');
