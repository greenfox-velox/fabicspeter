'use strict';

// write a function called each that takes an array and a function as a paramter
// and calls the function with each element of the array as parameter
// so it should call the array 3 times if the array has 3 elements
var smt = [1, 2, 3]

function each(array, fun){
  array.forEach(function(e){
    console.log(e);
  })
}
each(smt, setTimeOut(10000));
