// 'use strict';

var isItReady = true;
var maxTurns = 0;

var positions = {1:'', 2:'', 3:'', 4:'',5:'',6:'',7:'',8:'',9:''}
// localStorage.setItem(1, "X")

function getTheClosedInfos(tomb){
  for(i = 1; i < 10; i++){
    document.getElementById(i).innerHTML = localStorage.getItem(i);
  }
}
getTheClosedInfos(positions)

function changeInnerHTML(ID){
  maxTurns++;
  // checkingLines()
  if (document.getElementById(ID).innerHTML === "" && isItReady && maxTurns < 9){
    document.getElementById(ID).innerHTML = "X";
    // names[ID] = "X"
    localStorage.setItem(ID, "X")
    checkingLines()
    machineTurns()
  }
  // console.log(maxTurns);
}

function machineTurns(){
  var doc = document
  var randomPlace = Math.floor(Math.random() * 9) + 1
  if (doc.getElementById(randomPlace).innerHTML !== ""){
    machineTurns()
  }else if(doc.getElementById(5).innerHTML === ""){
    doc.getElementById(5).innerHTML = "O"
    // names[5] = "O"
    localStorage.setItem(5, "O")
  }
  else if (isItReady){
    doc.getElementById(randomPlace).innerHTML = "O"
    localStorage.setItem(randomPlace, "O")
  }
  checkingLines()
}

function checkingLines(){
  var one = document.getElementById(1).innerHTML
  var two = document.getElementById(2).innerHTML
  var three = document.getElementById(3).innerHTML
  var four = document.getElementById(4).innerHTML
  var five = document.getElementById(5).innerHTML
  var six = document.getElementById(6).innerHTML
  var seven = document.getElementById(7).innerHTML
  var eight = document.getElementById(8).innerHTML
  var nine = document.getElementById(9).innerHTML
  if (one == "X"  && two == "X" && three == "X" || four == "X" && five == "X" && six == "X" ||
    seven == "X" && eight == "X" && nine == "X" || one == "X" && four == "X" && seven == "X"||
    two == "X" && five == "X" && eight == "X" || three == "X" && six == "X" && nine == "X"||
    one == "X"&& five == "X" && nine == "X"|| three == "X" && five == "X" && seven == "X" ){
    document.getElementById("TextFooter").innerHTML = "Gratulation! You won!"
    document.getElementById("IMG").setAttribute("src", "evelin.gif")
    isItReady = false
  }else if (one == "O"  && two == "O" && three == "O" || four == "O" && five == "O" && six == "O" ||
    seven == "O" && eight == "O" && nine == "O" || one == "O" && four == "O" && seven == "O"||
    two == "O" && five == "O" && eight == "O" || three == "O" && six == "O" && nine == "O"||
    one == "O"&& five == "O" && nine == "O"|| three == "O" && five == "O" && seven == "O"){
    document.getElementById("TextFooter").innerHTML = "Comupter Wins! Try it again!!"
    document.getElementById("IMG").setAttribute("src", "evelinsad.gif")
    isItReady = false
  }
}
