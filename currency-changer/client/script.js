'use strict';

var url = 'http://localhost:8080/data'

let respObj = [];
let convertButton = document.querySelector('.button');
let fromConvert = document.querySelector('.fromConvert');
let toConvert = document.querySelector('.toConvert');
let amount = document.querySelector("input")
let pmessage = document.querySelector(".message")
convertButton.addEventListener('click', clickAction);

function clickAction() {
  var fromConvertrate = 1;
  var toConvertrate = 1;
  for (var g in respObj["0"]) {
    if (respObj["0"][g].currency == fromConvert.value){
      fromConvertrate = Number(respObj["0"][g].rate)
    }
    if (respObj["0"][g].currency == toConvert.value) {
      toConvertrate = Number(respObj["0"][g].rate)
    }
  }
  for(var zs in respObj){
    let fromGraphValue = 1;
    let toGraphValue = 1;
    for (var c in respObj[zs]){
      if(respObj[zs][c].currency == fromConvert.value) {
        fromGraphValue = respObj[zs][c].rate
      }
      // console.log(respObj[zs][c], fromConvert.value);
      if(respObj[zs][c].currency == toConvert.value) {
        toGraphValue = respObj[zs][c].rate
      }
      // console.log(respObj[zs][c]);
      if(zs % 10 == 0){
        data[zs / 10] = {x:0,y:0, y0:0}
        data[zs / 10].x = Number(zs)
        data[zs / 10].y = toGraphValue / fromGraphValue
      }
      }
    // console.log(respObj[zs]);
  }
  console.log(data);
  creatingGraph(data)
  let yourMoneyWorth = amount.value * toConvertrate / fromConvertrate
  pmessage.textContent = "Your "+ amount.value +" "+ fromConvert.value + " worth " + yourMoneyWorth + " " + toConvert.value
  // creatingGraph()
}
var data= [
    { x: 0, y: 1.02 },
    { x: 1, y: 2 },
    { x: 2, y: 3.111 },
    { x: 3, y: 4 },
    { x: 4, y: 5 } ]

function creatingGraph (data) {
  var charPlace = document.querySelector(".chart")
  charPlace.innerHTML = "";
  var graph = new Rickshaw.Graph( {
      element: charPlace,
      width: 300,
      height: 200,
      series: [{
          color: 'steelblue',
          data: data
      }]
  });
  graph.render();
};
creatingGraph(data);

(function getCurrencyDatas() {
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    var response = JSON.parse(xhr.response)["gesmes:Envelope"].Cube.Cube;
    for (var i in response){
      respObj[i] = {}
      respObj[i].time = response[i]._attributes.time
      var cubeAttr = response[i].Cube
      for( var n in cubeAttr){
        // console.log(cubeAttr[n]._attributes);
        respObj[i][n] = {}
        respObj[i][n] = cubeAttr[n]._attributes
      }
    }
    // console.log(respObj);
  };
  xhr.open('GET', url);
  xhr.send();
}());
