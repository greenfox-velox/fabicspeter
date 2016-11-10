'use strict';

function findOutlier(integers){
  var odd = 0
  var even = 0
  integers.forEach(function(e){
    if (Math.abs(e) % 2 === 0){
      odd ++
    } else{
      even ++
    };
  })
  if (odd > even){
    integers.forEach(function(e){
      if(Math.abs(e) % 2 === 1){
        return e;
      }
    })
  } else {
    integers.forEach(function(e){
      if(Math.abs(e) % 2 === 0){
        return e;
      }
    })
  }
}
if(i === 6){sum += (2 * weeks + 12)}
else if(i === 5) {sum += (2 * weeks + 10) + (2 * weeks + 11)}
else if(i === 4) {sum += (2 * weeks + 8) + (2 * weeks + 9) + (2 * weeks + 10)}
else if(i === 3) {sum += (2 * weeks + 6) + (2 * weeks + 7) + (2 * weeks + 8) + (2 * weeks + 9)}
else if(i === 2) {sum += (2 * weeks + 4) + (2 * weeks + 5) + (2 * weeks + 6) + (2 * weeks + 7)+ (2 * weeks + 8)}
else if(i === 1) {sum += (2 * weeks + 2) + (2 * weeks + 3) + (2 * weeks + 4) + (2 * weeks + 5)+ (2 * weeks + 6) + (2 * weeks + 7)}
else if(i === 0) {sum += (2 * weeks + 0) + (2 * weeks + 1) + (2 * weeks + 2) + (2 * weeks + 3)+ (2 * weeks + 4) + (2 * weeks + 5)+ (2 * weeks + 6)}


var shortener = function(message) {
  if( message.length <= 160) return message;

  var c = message.length - 160;
  for ( var letter in message )
  {
    var place = message.length - letter - 1;
    if( message[place] == ' ' )
    {
      --c;
      message = message.substring(0, place) + message[place + 1].toUpperCase() + message.substring(place + 2);
      if ( c == 0 ) break;
    }
  }
  return message;
}
