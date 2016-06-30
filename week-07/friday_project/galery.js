'use strict';

var pictures = ['/home/peter/Asztal/park.jpg', '/home/peter/Asztal/1.png', '/home/peter/Asztal/2.png', '/home/peter/Asztal/3.png', '/home/peter/Asztal/4.png', '/home/peter/Asztal/5.png']
var pictureSource = document.querySelector('.big_picture');
var picturesDown = document.querySelector('.pictures')
var n = 0;
pictureSource.setAttribute('src', pictures[n]);
picturesDown.setAttribute('src', pictures[n])

var button1 = document.querySelector('.button1');
button1.addEventListener('click', step_ahed_by_click);
function step_ahed_by_click () {
  if (n === 0){
    n = pictures.length;
  };
     n --;
     pictureSource.setAttribute('src', pictures[n]);
     console.log(n);
 };
 var button2 = document.querySelector('.button2');
 function step_back_by_click () {
   if (n === pictures.length){
     n = 0;
   };
      pictureSource.setAttribute('src', pictures[n]);
      console.log(n);
      n ++;
  };
  button2.addEventListener('click', step_back_by_click);
