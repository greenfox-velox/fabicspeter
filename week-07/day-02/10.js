'use strict';

// create a student object
// that has a method `addgrade`, that takes a grade from 1 to 5
// an other method `getAverage`, that returns the average of the grades
var student = {
  grades: [],
  addgrade: function(grades){
    this.grades.push(grades)
  },
  getAverage: function(){
    var sum_of_grades = 0;
    this.grades.forEach(function(e){
    sum_of_grades += e

  });return (sum_of_grades / this.grades.length)
  },
}
student.addgrade(4)
student.addgrade(3)
student.addgrade(4)
student.addgrade(5)
console.log(student.getAverage());
console.log(student.grades);
