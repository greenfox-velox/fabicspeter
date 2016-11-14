'use strict';

var url = 'http://localhost:8080/data'
var convertButton = document.querySelector('.button');
var fromConvert = document.querySelector('.fromConvert');
var toConvert = document.querySelector('.toConvert');
var amount = document.querySelector("input");
var pmessage = document.querySelector(".message");
var convertPicture = document.querySelector("img");
var infosWhatWeNeedFromEcb = [];
var minMax = [0, 1];
var datesInsecond= [];
convertButton.addEventListener('click', clickAction);
convertPicture.addEventListener('click', changeCrurrency);
var data = [
  { x: 0, y: 1 },
  { x: 1, y: 2 },
  { x: 2, y: 3 },
  { x: 3, y: 4 },
  { x: 4, y: 5 } ];

function changeCrurrency() {
  var fromTo = fromConvert.value;
  fromConvert.value = toConvert.value;
  toConvert.value = fromTo;
}

function clickAction() {
  var fromConvertrate = 1;
  var toConvertrate = 1;
  for (var indexes in infosWhatWeNeedFromEcb["0"]) {
    var currencyValue = infosWhatWeNeedFromEcb["0"][indexes].currency;
    if ( currencyValue == fromConvert.value){
      fromConvertrate = Number(infosWhatWeNeedFromEcb["0"][indexes].rate);
    }
    if (currencyValue == toConvert.value) {
      toConvertrate = Number(infosWhatWeNeedFromEcb["0"][indexes].rate);
    }
  }
  var yourMoneyWorth = amount.value * toConvertrate / fromConvertrate;
  for(var i in infosWhatWeNeedFromEcb){
    var fromGraphValue = 1;
    var toGraphValue = 1;
      for (var c in infosWhatWeNeedFromEcb[i]){
        if(infosWhatWeNeedFromEcb[i][c].currency == fromConvert.value) {
          fromGraphValue = infosWhatWeNeedFromEcb[i][c].rate;
        }
        if(infosWhatWeNeedFromEcb[i][c].currency == toConvert.value) {
          toGraphValue = infosWhatWeNeedFromEcb[i][c].rate;
        }
        data[i] = {x:0,y:0}, data[i].x = datesInsecond[i] / 1000, data[i].y = toGraphValue / fromGraphValue, minMax[i] = data[i].y;
      }
  }
  creatingGraph(data)
  pmessage.textContent = "Your "+ amount.value +" "+ fromConvert.value + " worth " + yourMoneyWorth + " " + toConvert.value
}

function creatingGraph (data) {
  var axis0 = document.querySelector(".axis0");
  var charPlace = document.querySelector(".chart");
  var min = Math.min.apply(null, minMax);
  var max = Math.max.apply(null, minMax);
  var scale = d3.scale.linear().domain([min, max]).nice();
  axis0.innerHTML = "", charPlace.innerHTML = "";
  var graph = new Rickshaw.Graph( {
      element: charPlace,
      width: 300,
      height: 200,
      renderer: 'line',
      series: [{
          color: 'lightblue',
          name: "rate",
          data: data,
          scale: scale
      }]
  });
  new Rickshaw.Graph.Axis.Y.Scaled({
    element: axis0,
    graph: graph,
    orientation: 'left',
    scale: scale,
    tickFormat: Rickshaw.Fixtures.Number.formatKMBT
  });
  Rickshaw.Graph.Axis.Time({
    graph: graph
  });
  new Rickshaw.Graph.HoverDetail({
    graph: graph
  });
  graph.render();
};

creatingGraph(data);

(function getCurrencyDatas() {
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    var resposeTrasferedToObject = JSON.parse(xhr.response)["gesmes:Envelope"].Cube.Cube;
    for (var infosDaysBefore in resposeTrasferedToObject){
      var timeInMilliseconds = Number(new Date (resposeTrasferedToObject[infosDaysBefore]._attributes.time));
      infosWhatWeNeedFromEcb[infosDaysBefore] = {};
      infosWhatWeNeedFromEcb[infosDaysBefore].time = timeInMilliseconds;
      datesInsecond.splice(0, 0, timeInMilliseconds)
      var dailyCurrencyRates = resposeTrasferedToObject[infosDaysBefore].Cube;
      for( var n in dailyCurrencyRates){
        infosWhatWeNeedFromEcb[infosDaysBefore][n] = {};
        infosWhatWeNeedFromEcb[infosDaysBefore][n] = dailyCurrencyRates[n]._attributes;
      }
    }
  };
  xhr.open('GET', url);
  xhr.send();
}());
