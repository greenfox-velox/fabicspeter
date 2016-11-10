// var array = [198838046,146854791,165973097]
// var sum = array.reduce((a, b) => a + b, 0);
// // console.log(sum);
// function oddOrEven(array){
//   var odd = 0
//   var even = 0
//   array.forEach(function(e){
//     if (Math.abs(e) % 2 === 0){
//       odd ++
//     } else{
//       even ++
//     }
//   })
//   if (odd > even){
//     array.forEach(function(e){
//       if(Math.abs(e) % 2 === 1){
//         console.log(e);
//       }
//     })
//   } else {
//     array.forEach(function(e){
//       if(Math.abs(e) % 2 === 0){
//         console.log(e);
//       }
//     })
//   }
// }
// // console.log(array.length)
// oddOrEven(array);
// function clearIt(number){
var valami = 0
function getAnArray(number){
  output = [],
  sNumber = number.toString();
  if (number > 9){
    for (var i = 0, len = sNumber.length; i < len; i += 1) {
        output.push(+sNumber.charAt(i));
      }
       var number = output.reduce((a, b) => a * b, 1);
      valami += 1
      console.log(number);
  }
}
var a = 1333
console.log(getAnArray(a));
console.log(valami);


// function splitTheArray(z){
//   z = [...z + ""].map(v => +v)
//   var sum = [z.reduce((a, b) => a * b, 0);
//   return sum
// }
// console.log(splitTheArray(z))
