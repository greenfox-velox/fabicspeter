'use strict';

var numbers = [2, 5, 11, 28];

// create a function that takes an array of numbers and returns a boolean
// it should return true if all the elements are prime, false otherwise

function prime_elements(array){
  return array.every(isPrime)
}

// var n = 7
function isPrime(value) {
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
}
console.log(prime_elements(numbers));
