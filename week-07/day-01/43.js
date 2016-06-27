'use strict';

var numbers = [2, 3, 4, 5, 6, 7];

function remove_odd_numbers(arr){
  var new_arr = [];
  var n = 0;
  while (n <= arr.length - 1) {
    if (arr[n] % 2 == 0){
      new_arr.push(arr[n])
      n ++;
    } else{
      n ++;
    }
  }return new_arr

} console.log(remove_odd_numbers(numbers));
