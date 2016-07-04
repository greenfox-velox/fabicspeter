'use strict';

var students = [
  {name: 'Steve', age: 12, books: ['Harry Potter', 'Lord of the Rings']},
  {name: 'Ryan', age: 11, books: ['The funcdation', '50 szo a semmirol']},
  {name: 'Sheela', age: 14},
  {name: 'Charlee', age: 9, books: []},
  {name: 'Jessica', age: 12, books: ['Dune']},
  {name: 'Robert', age: 15}
];

function countBooks(by_list) {
  return by_list.reduce(function(acc, e) {
    return acc + (e['books'] || []).length;
  }, 0);
}
console.log(countBooks(students));
// create a function that counts all the books of an array of students
// not every student has a property called books
