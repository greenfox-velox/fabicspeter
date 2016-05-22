class Student():

    def __init__(self):
        self.grade = []

    def get_grade(self, g):
        if g >= 1 and g <= 5:
            self.grade += [g]

    def get_avg(self):
        return sum(self.grade) / len(self.grade)

Adam = Student()
Brendon = Student()
Leonardo = Student()

Adam.get_grade(2)
Adam.get_grade(3)
Adam.get_grade(4)

Brendon.get_grade(3)
Brendon.get_grade(4)
Brendon.get_grade(5)
Leonardo.get_grade(1)
Leonardo.get_grade(3)
Leonardo.get_grade(5)

print(Adam.get_avg())
print(Brendon.get_avg())
print(Leonardo.get_avg())
