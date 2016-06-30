'use strict';

var pictures = ['/home/peter/Asztal/park.jpg', '/home/peter/Asztal/1.png', '/home/peter/Asztal/2.png', '/home/peter/Asztal/3.png', '/home/peter/Asztal/4.png', '/home/peter/Asztal/5.png']
var pictureSource = document.querySelector('img');

var n = 0;
console.log(pictureSource.getAttribute('src'));
pictureSource.setAttribute('src', pictures[n]);

var button = document.querySelector('.button1');
function step_ahed_by_click () {
  if (n === 0){
    n = pictures.length;
  };
     console.log(pictureSource.getAttribute('src'));
     n --;
     pictureSource.setAttribute('src', pictures[n]);
     console.log(n);
 };
 button.addEventListener('click', step_ahed_by_click);

 var button = document.querySelector('.button2');
 function step_back_by_click () {
   if (n === pictures.length){
     n = 0;
   };
      console.log(pictureSource.getAttribute('src'));
      pictureSource.setAttribute('src', pictures[n]);
      console.log(n);
      n ++;
  };
  button.addEventListener('click', step_back_by_click);
