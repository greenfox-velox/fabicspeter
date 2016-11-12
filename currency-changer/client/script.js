'use strict';

var url = 'http://localhost:8080/data'
let convertButton = document.querySelector('.button');
let fromConvert = document.querySelector('.fromConvert');
let toConvert = document.querySelector('.toConvert');
let amount = document.querySelector("input");
let axis0 = document.querySelector(".axis0");
let pmessage = document.querySelector(".message");
let convertPicture = document.querySelector("img");
let infosWhatWeNeedFromEcb = [];
let minMax = [0, 1];
let datesInsecond= [];
convertButton.addEventListener('click', clickAction);
convertPicture.addEventListener('click', changeCrurrency);
var data= [
  { x: 0, y: 1 },
  { x: 1, y: 1 },
  { x: 2, y: 1 },
  { x: 3, y: 1 },
  { x: 4, y: 1 } ]

function changeCrurrency() {
  var fromTo = fromConvert.value
  fromConvert.value = toConvert.value
  toConvert.value = fromTo
}

function clickAction() {
  let fromConvertrate = 1;
  let toConvertrate = 1;
  // thats for a daily exchange
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
    // console.log(infosWhatWeNeedFromEcb[zs].time);
    // if (zs % 10 === 0){
      for (var c in infosWhatWeNeedFromEcb[zs]){
        if(infosWhatWeNeedFromEcb[zs][c].currency == fromConvert.value) {
          fromGraphValue = infosWhatWeNeedFromEcb[zs][c].rate
        }
        // console.log(infosWhatWeNeedFromEcb[zs][c], fromConvert.value);
        if(infosWhatWeNeedFromEcb[zs][c].currency == toConvert.value) {
          toGraphValue = infosWhatWeNeedFromEcb[zs][c].rate
        }
        // console.log(infosWhatWeNeedFromEcb[zs][c]);
        data[zs] = {x:0,y:0}
        data[zs].x = datesInsecond[zs] / 1000
        data[zs].y = toGraphValue / fromGraphValue
        minMax[zs] = data[zs].y
        // console.log(datesInsecond);
      }
      console.log(data);
      // data[zs].x
    // }else{console.log("valami");}
  }
  axis0.innerHTML = "";
  creatingGraph(data)
  let yourMoneyWorth = amount.value * toConvertrate / fromConvertrate
  pmessage.textContent = "Your "+ amount.value +" "+ fromConvert.value + " worth " + yourMoneyWorth + " " + toConvert.value
}


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
          name: "rate",
          data: data,
          scale: scale
      }]
  });

  new Rickshaw.Graph.Axis.Y.Scaled({
    element: document.querySelector('.axis0'),
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
      let timeInMilliseconds = Number(new Date (resposeTrasferedToObject[infosDaysBefore]._attributes.time))
      infosWhatWeNeedFromEcb[infosDaysBefore] = {}
      infosWhatWeNeedFromEcb[infosDaysBefore].time = timeInMilliseconds
      datesInsecond.splice(0, 0, timeInMilliseconds)
      var dailyCurrencyRates = resposeTrasferedToObject[infosDaysBefore].Cube
      // console.log(infosWhatWeNeedFromEcb[infosDaysBefore].time);
      for( var n in dailyCurrencyRates){
        infosWhatWeNeedFromEcb[infosDaysBefore][n] = {}
        infosWhatWeNeedFromEcb[infosDaysBefore][n] = dailyCurrencyRates[n]._attributes
      }
    }
  };
  xhr.open('GET', url);
  xhr.send();
}());
