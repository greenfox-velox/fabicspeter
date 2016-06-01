# Write a Person class that have a name and a birth_date property
# It should raise an error of the birthdate is less than 0 or more than 2016

class Person():

    def __init__(self, n, bd):
        self.name = n
        self.bd = bd
        print(n, bd)

Adam = Person('Adam', 19999)
print (Adam.name, Adam.bd)
