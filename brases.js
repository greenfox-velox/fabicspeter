'use strict';

function validParentheses(parens){
  var whatImLookingFor = parens[0]
  var number = parens.length
  while(number >= 0){
    for(var i = 1; i < parens.length; i++){
      if(parens[0] === "(" && parens[i] === ")"){
          parens = parens.replace(parens[i], "")
          parens = parens.replace(parens[0], "")
      } else if (parens[0] === ")" && parens[i] === "("  && parens.length > 2){
          parens = parens.replace(parens[i], "")
          parens = parens.replace(parens[0], "")
      }
    }
  number --
  }
  if(parens.length === 0){return true}
  else{return false}
}
