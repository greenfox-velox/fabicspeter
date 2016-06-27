// 'use strict';
//
// var ac = 8;
// var time = 120;
// var out = '';
// // if ac is dividable by 4
// // and time is not more than 200
// // set out to 'check'
// // if time is more than 200
// // set out to 'Time out'
// // otherwise set out to 'Run Forest Run!'
// if (ac % 4 == 0 && time =< 200){
//   console.log(out = 'check');
// }else if (time > 200){
//   console.log(out = ' Time out');
// }else{
//   console.log(out = 'Run Forest Run');
// }
'use strict';

// Write a program that prints the numbers from 1 to 100.
// But for multiples of three print "Fizz" instead of the number
// and for the multiples of five print "Buzz".
// For numbers which are multiples of both three and five print "FizzBuzz".
var n = 1
while (n <= 100) {
  if (n % 15 == 0){
      console.log('FizzBuzz');
    }else if (n % 5 == 0){
      console.log('Buzz');
    }else if (n % 3 == 0){
      console.log('Fizz');
    }else {
      console.log(n);
    }
  n ++
}
