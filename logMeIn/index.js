'use strick';

var isItReady = true
var maxTurns = 0

function changeInnerHTML(ID){
  maxTurns++;
  if (document.getElementById(ID).innerHTML === "" && isItReady && maxTurns < 8){
    document.getElementById(ID).innerHTML = "X";
    checkingLines()
    machineTurns()
  }
  console.log(maxTurns);
}

function machineTurns(){
  var doc = document
  var randomPlace = Math.floor(Math.random() * 9) + 1
  // checkingLines()
  if (doc.getElementById(randomPlace).innerHTML !== ""){
    machineTurns()
  }else if(doc.getElementById(5).innerHTML === ""){
    doc.getElementById(5).innerHTML = "O"
  }
  else if (isItReady){
    doc.getElementById(randomPlace).innerHTML = "O"
  }
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
    console.log("nyertel")
    isItReady = false
  }else if (one == "O"  && two == "O" && three == "O" || four == "O" && five == "O" && six == "O" ||
    seven == "O" && eight == "O" && nine == "O" || one == "O" && four == "O" && seven == "O"||
    two == "O" && five == "O" && eight == "O" || three == "O" && six == "O" && nine == "O"||
    one == "O"&& five == "O" && nine == "O"|| three == "O" && five == "O" && seven == "O"){
    console.log("a gep nyert sorry");
    isItReady = false
  }
}
