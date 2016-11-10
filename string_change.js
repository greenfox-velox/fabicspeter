'use strict';

function stringEchange(string) {
  var inputLength = string.length
  var exchanged = "";
  if (inputLength % 2 === 0){
    exchanged += string.slice((inputLength / 2), inputLength)
    exchanged += string.slice(0, (inputLength / 2))
  }else {
    exchanged += string.slice((inputLength / 2 + 1), inputLength)
    exchanged += string.slice(inputLength / 2, inputLength / 2 +1)
    exchanged += string.slice(0, (inputLength / 2))
  }
  return exchanged
};
console.log(stringEchange('valamikeko'));
