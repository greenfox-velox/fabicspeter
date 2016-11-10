'use strict';

function isPrime(num) {
   if (num <= 4){
   for(var i = 2; i < num; i++) {
       if(num % i === 0) {
           return false;
       }
   }
   }else {
   for(var i = 2; i < num / 2; i++) {
       if(num % i === 0) {
           return false;
       }
   }
   }
   return num > 1;
}
