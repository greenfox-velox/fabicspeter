'use strict';


function narcissistic(value){
  elementv = value.toString();
  var length = elementv.length;
  var vegleges = 0
  for (var i = 0; i < length; i++) {
      vegleges += Math.pow(elementv[i], length);
  }
  if (vegleges === value){
    return (value + " is narcissistic")
  } else{ return (value + " is not narcissistic")}
}

console.log(narcissistic(number))
