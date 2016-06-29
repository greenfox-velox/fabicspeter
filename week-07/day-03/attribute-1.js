'use strict';

var pictureSource = document.querySelector('img');
console.log(pictureSource.getAttribute('src'));
pictureSource.setAttribute('src', '/home/peter/Asztal/park.jpg');

var new_link = document.querySelector('a');
new_link.setAttribute('href', 'http://www.greenfoxacademy.com/');

var second_button_remove = document.querySelector('.this-one');
second_button_remove.setAttribute("disabled", "true");
second_button_remove.textContent = 'Don\'t click me!'
