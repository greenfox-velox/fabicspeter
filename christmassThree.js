'use strict';

function christmasTree(height) {
  var valami = "";
  var counter = 1
  var beka = height
  for(var i = height; i > 0; i --){
    for(var h = beka - 1; h > 0 ; h --){
      valami += " "
    }
    for(var h = counter; h > 0 ; h --){
      valami += "*"
    }
    for(var h = beka - 1; h > 0 ; h --){
      valami += " "
    }
    beka -= 1
    if(beka > 0){ valami += "\n"}
    counter += 2
  }
  return valami
}
console.log(christmasTree(5))
