class Animal(object):
    def __init__(self):
        self.stomach = 0
        self.food = ''
        self.race = ''

    def eat(self, food):
        if food != self.food:
            raise Exception ('Bleee')
        self.stomach += 1
        print('I am a' + self.race + 'thanks for the:' + self.food)

    def poop(self):
        if self.stomach != 0:
            self.stomach -= 1
            print('My poop is smells of :' + self.food)
        else:
            print('Lol did not poop')

class Unit_cost(object):
    def __init__(self):
        self.Shrooms = 1
        self.Shrimp = 1
        self.cleaning = 2


class Okapi(Animal):
    def __init__(self):
        super().__init__()
        self.race = 'okapi'
        self.food = 'Shrooms'

class Platypus(Animal):
    def __init__(self):
        super().__init__()
        self.race = 'platypus'
        self.food = 'Shrimp'


class Zoo(object):
    def __init__(self):
        self.animals = [
            Platypus(),
            Platypus(),
            Okapi()
            ]
        self.food = {
        "Shrimp": 4,
        "Shrooms": 3
        }
    def feed(self):
        for animal in self.animals:
            if type(animal) == Okapi:
                animal.eat('Shrooms')
                self.food['Shrooms'] -= 1
            else:
                animal.eat('Shrimp')
                self.food['Shrimp'] -= 1
            animal.poop()

budapesti_allat_es_noveny_kert = Zoo()
budapesti_allat_es_noveny_kert.feed()
