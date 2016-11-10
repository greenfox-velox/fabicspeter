'use strict';

var c = [9,8,7,6,5,4,3,2,1]
var counter = 0;

function bubbleSort (array){
  // var neuArr = []
  for(var i = 0; i < array.length-1; i ++){
    counter++
    if (array[i] > array[i+1]){
      var e = array[i];
      var f = array[i + 1]
      array[i] = f
      array[i + 1] = e
      return bubbleSort(array)
      // console.log(i);
    }
    // console.log(counter);
  }
  return array
}
console.log(bubbleSort(c));
console.log(counter)
