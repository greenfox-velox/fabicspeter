'use strict';

var url = 'http://localhost:8080/data'

let infosWhatWeNeedFromEcb = [];
let convertButton = document.querySelector('.button');
let fromConvert = document.querySelector('.fromConvert');
let toConvert = document.querySelector('.toConvert');
let amount = document.querySelector("input")
let pmessage = document.querySelector(".message")
let convertPicture = document.querySelector("img")
let minMax = [0, 1];
convertButton.addEventListener('click', clickAction);
convertPicture.addEventListener('click', clickAction);


function clickAction() {
  let fromConvertrate = 1;
  let toConvertrate = 1;
  for (var g in infosWhatWeNeedFromEcb["0"]) {
    if (infosWhatWeNeedFromEcb["0"][g].currency == fromConvert.value){
      fromConvertrate = Number(infosWhatWeNeedFromEcb["0"][g].rate)
    }
    if (infosWhatWeNeedFromEcb["0"][g].currency == toConvert.value) {
      toConvertrate = Number(infosWhatWeNeedFromEcb["0"][g].rate)
    }
  }
  for(var zs in infosWhatWeNeedFromEcb){
    let fromGraphValue = 1;
    let toGraphValue = 1;
    for (var c in infosWhatWeNeedFromEcb[zs]){
      if (zs % 10 == 0){
        if(infosWhatWeNeedFromEcb[zs][c].currency == fromConvert.value) {
          fromGraphValue = infosWhatWeNeedFromEcb[zs][c].rate
        }
        // console.log(infosWhatWeNeedFromEcb[zs][c], fromConvert.value);
        if(infosWhatWeNeedFromEcb[zs][c].currency == toConvert.value) {
          toGraphValue = infosWhatWeNeedFromEcb[zs][c].rate
        }
        // console.log(infosWhatWeNeedFromEcb[zs][c]);
        data[zs / 10] = {x:0,y:0}
        data[zs / 10].x = Number(zs)
        data[zs / 10].y = toGraphValue / fromGraphValue
        minMax[zs / 10] = data[zs / 10].y
      }
    }
    // console.log(infosWhatWeNeedFromEcb[zs]);
  }
  // console.log(data);
  creatingGraph(data)
  let yourMoneyWorth = amount.value * toConvertrate / fromConvertrate
  pmessage.textContent = "Your "+ amount.value +" "+ fromConvert.value + " worth " + yourMoneyWorth + " " + toConvert.value
}

var data= [
    { x: 0, y: 1 },
    { x: 1, y: 2 },
    { x: 2, y: 3 },
    { x: 3, y: 4 },
    { x: 4, y: 5 } ]

function creatingGraph (data) {
  var charPlace = document.querySelector(".chart")
  var min = Math.min.apply(null, minMax)
  var max = Math.max.apply(null, minMax)
  console.log(min, max);
  var scale = d3.scale.linear().domain([min, max]).nice();
  charPlace.innerHTML = "";
  var graph = new Rickshaw.Graph( {
      element: charPlace,
      width: 300,
      height: 200,
      series: [{
          color: 'lightblue',
          data: data,
          scale: scale
      }]
  });
  graph.render();
};
creatingGraph(data);

(function getCurrencyDatas() {
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    var resposeTrasferedToObject = JSON.parse(xhr.response)["gesmes:Envelope"].Cube.Cube;
    for (var infosDaysBefore in resposeTrasferedToObject){
      infosWhatWeNeedFromEcb[infosDaysBefore] = {}
      infosWhatWeNeedFromEcb[infosDaysBefore].time = resposeTrasferedToObject[infosDaysBefore]._attributes.time
      var dailyCurrencyRates = resposeTrasferedToObject[infosDaysBefore].Cube
      for( var n in dailyCurrencyRates){
        infosWhatWeNeedFromEcb[infosDaysBefore][n] = {}
        infosWhatWeNeedFromEcb[infosDaysBefore][n] = dailyCurrencyRates[n]._attributes
      }
    }
  };
  xhr.open('GET', url);
  xhr.send();
}());
