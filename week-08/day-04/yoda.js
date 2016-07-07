'use strict'

var button1 = document.querySelector('.YodanizeMe');
var input = document.querySelector('.textinput')
var h1 = document.querySelector('h1')

function button_push(){
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    var data = xhr.responseText;
    h1.textContent = data;
  };
  xhr.open('GET', 'https://yoda.p.mashape.com/yoda?sentence=' + encodeURIComponent(input.value));
  xhr.setRequestHeader("X-Mashape-Key", "KEjoG3sQWtmshlaiwkAEob887fgSp1pi544jsniIOqOgC9nIXm");
  xhr.send();
};

button1.addEventListener('click', button_push);
