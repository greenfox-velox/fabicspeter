'use strict';

var button1 = document.querySelector('button');
var xhr = new XMLHttpRequest();
var pies = document.querySelector('p');

button1.addEventListener('click', viewData);

  xhr.onload = function() {
    console.log(JSON.parse(xhr.response).season)
  };
  xhr.open('GET', 'http://calapi.inadiutorium.cz/api/v0/en/calendars/default/2015/6/27')
  xhr.send();

function viewData() {
  document.querySelector('.p1').textContent = JSON.parse(xhr.response).season
  document.querySelector('.p2').textContent = JSON.parse(xhr.response).weekday
}
