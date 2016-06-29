'use strict';

var header = document.querySelector('h1');
alert(header.innerHTML);

alert(document.querySelector('body p').innerHTML);


alert(document.querySelector('.result').textContent);

document.querySelector('h1').textContent= 'New content';

document.querySelector('.result').textContent = document.querySelector('body p').textContent
