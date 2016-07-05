'use strict'

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
  d('anon was fired');
}
setTimeout(anonFunc, 3*1000);
