'use strict';

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function formatPhoneNumber(s) {
  var s2 = (""+s).replace(/\D/g, '');
  var m = s2.match(/^(\d{3})(\d{3})(\d{4})$/);
  return (!m) ? null : "(" + m[1] + ") " + m[2] + "-" + m[3];
}
console.log(formatPhoneNumber(numbers));
