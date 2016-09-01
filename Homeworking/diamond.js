
function diamond(n){
  var diam = "";
  if (n % 2 === 0 || n < 1) {
    return null;
  }
  else {
  var i, j, k, x = n;
    for (i = 1; i <= x; i+=2) {

      for (j = 0; j <(x-i/2-x/2); j++) {
        diam += " ";
      }

      for (k = 1; k <= i; k++) {
        diam += "*"
      }
      diam += "\n";

    }

    for (i=x-2; i >= 0; i -= 2) {

      for (j = 0; j < (x-i/2-x/2); j++) {
        diam += " ";
      }

      for (k = 1; k <= i; k++) {
        diam += "*"
      }
      diam += "\n";
    }
  }
  return diam;
}
console.log(diamond(5));
