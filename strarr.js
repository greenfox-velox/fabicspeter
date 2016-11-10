'use strict';

function longestConsec(strarr, k) {
  if(strarr.length < k + k-1 || k < 1){return ""}
  var number = k
  var string = ""
  for (var i = k-1; i< k+k-1; i ++){
    string += strarr[i]
  }
  return string
}
