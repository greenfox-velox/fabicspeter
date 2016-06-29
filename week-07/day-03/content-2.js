'use strict';

var writeableElement = document.querySelector('p.dog');
console.log(writeableElement.innerHTML);

var allelement = document.querySelectorAll('p');

for(var i = 0; i < allelement.length; i++){
  allelement[i].innerHTML = writeableElement.innerHTML
}
