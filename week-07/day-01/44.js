'use sttict';

var numbers = [7, 5, 8, 2];
// Write a function that returns the minimal element
// in an array (your own min function)
function minimal_element(x){
  min_ele = (x[0])
  n = 0
  while (n < x.length){
    if (x[n] < min_ele){
      min_ele = x[n]
      n ++
    }else {
      n ++
    }
  }return min_ele
}
console.log(minimal_element(numbers));
