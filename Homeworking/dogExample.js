'use strict';

// const dog = function () {
//   const sound = 'woof'
//   return {
//     talk: function(){console.log(sound);}
//   }
// }
// const sniffles = dog()
// sniffles.talk()

// var dog = function () {
//   this.sound ='woof'
// };
// dog.prototype.talk = function () {
//   console.log(this.sound);
// };
// var zsele = new dog();
// zsele.talk();
 var dog = (function () {
   var sound = 'woof';
   
   function publicTalk() {
     console.log(sound);
   }
  return {
    talk: publicTalk
  }
})();
dog.talk();
