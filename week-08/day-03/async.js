'use strict';

function one (){
  d('One was called, man')
}
function two (){
  d('two was called, man')
}
function three (){
  d('three was called, man')
}
function anonFunc() {
  console.log('anon was fired');
}
console.log('syncron');
var x = 1
function numb(x){
  while (x < 10){
    console.log(x);
    x++
  }
}
setTimeout(anonFunc, 3*1000, numb(x));
