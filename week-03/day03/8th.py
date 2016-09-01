class Person:
    def __init__(self, first_name, last_name):
        self.first_name = first_name
        self.last_name = last_name

    def greet(self):
        print('Hi, I am:' +  self.first_name + ' ' + self.last_name)


class Student(Person):
    def __init__(self, first_name, last_name):
        self.first_name = first_name
        self.last_name = last_name
        self.grades = []
    def add_grade(self, new_grade):
        self.grades.append(new_grade)
    def salute(self):
        self.greet()
        summa = 0
        for grade in self.grades:
            summa += grade
        print(summa / len(self.grades))

adorjan = Person('Adorjan', 'Németh')
adorjan.greet()
adorjan.add_grade(4)
adorjan.add_grade(3)
