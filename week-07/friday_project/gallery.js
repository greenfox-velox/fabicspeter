'use strict';

var pictures = [
'/home/peter/Asztal/mokus.jpg',
'/home/peter/Asztal/2.png',
'/home/peter/Asztal/6.jpg',
'/home/peter/Asztal/images.jpg',
'/home/peter/Asztal/4.png',
'/home/peter/Asztal/images_bear.jpg',
'/home/peter/Asztal/5.png'
];
var big_picture_var = document.querySelector('.big_picture');
var small_picture_var = document.querySelectorAll('.small_picture_var');
var big_button1 = document.querySelector('.big_button1');
var small_button1 = document.querySelector('.small_button1');
var big_button2 = document.querySelector('.big_button2');
var small_button2 = document.querySelector('.small_button2');
var n = 0;
var small_counter = 0;

big_picture_var.setAttribute('src', pictures[n]); //setup the great picture

// CHANGE THE GREAT PICTURE BY BUTTON CLICK ------->

function step_ahed_by_click () {
  if (n === 0){
    n = pictures.length;
    big_picture_var.setAttribute('src', pictures[n]);
  };
  n --;
     big_picture_var.setAttribute('src', pictures[n]);
     console.log(n);
 };
 big_button1.addEventListener('click', step_ahed_by_click);

 function step_back_by_click () {
   if (n === pictures.length-1){
     n = 0;
     console.log('haho');
   };
   n ++;
   big_picture_var.setAttribute('src', pictures[n-1]);
   console.log(n);
 };
 big_button2.addEventListener('click', step_back_by_click);


// SMALL BUTTON CONTROLING ----------------->>>

function small_picture_setup() {
  for (var i = 0; i < small_picture_var.length; i++) {
    small_picture_var[i].setAttribute('src', pictures[small_counter + i]);
  }
}
small_picture_setup(); //setup the small pictures

function small_picture_right() {
  if (small_counter >= 0 && small_counter < 2){
    small_counter++;
    small_picture_setup();
  }
}
small_button1.addEventListener('click', small_picture_left);

function small_picture_left() {
  if (small_counter > 0 && small_counter < 3){
    small_counter--;
    small_picture_setup();
  }
}
small_button2.addEventListener('click', small_picture_right);

// SMALL PICTURES CHANGES TO BIG BY CLIK  -------->>

function click_small_image(i){
  return function(){
    big_picture_var.setAttribute('src', small_picture_var[i].getAttribute('src'));
    pictures.forEach(function(e, j){
      if (e === small_picture_var[i].getAttribute('src')){
        return j;
      }
    })
  };
}
for(var i = 0; i < small_picture_var.length ; i++){
  small_picture_var[i].addEventListener('click', click_small_image(i));
};
