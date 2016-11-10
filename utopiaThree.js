'use strict';

function valami(t){
  t > 1
  var meret = 0
  for(var a0 = 0; a0 < t; a0 ++){
    if(a0 % 2 !== 1){
      meret += 1
    } else{meret *= 2}
  }
  meret += 1
  return meret
}
console.log(valami(4));
