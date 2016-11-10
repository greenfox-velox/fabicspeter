var counter = 0;

var palindromeChainLength = function(n) {
  var ennStringified = n.toString();
  if (checkPalindrom(ennStringified)){
    return counter;
  } else {
    var c = ennStringified.split("").reverse().join("")
    counter++;
    return palindromeChainLength(n + parseInt(c));
  }

};

function checkPalindrom(str) {
    return str == str.split('').reverse().join('');
}

console.log(palindromeChainLength(1));
