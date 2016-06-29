'use strict';

var new_items = ['apple', 'banana', 'cat', 'dog']

var allelement = document.querySelectorAll('li');

for(var i = 0; i < allelement.length; i++){
  allelement[i].textContent = new_items[i]
}
