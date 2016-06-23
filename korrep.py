#
# class Vehicle():
#   def __init__(self, km):
#     self.km = km
#
#   def ride(self, km):
#     self.km += km
#
#   def print_km(self):
#     print('KM:' + str(self.km))
#
# roller = Vehicle(24)
# roller.ride(11)
# roller.print_km()
#
# class Car(Vehicle):
#   def __init__(self, km, gas):
#     super().__init__(km)
#     self.gas = gas
#
#   def ride(self, km):
#     super().ride(km)
#     self.gas -= km
#
#   def print_gas(self):
#     print('GAS:' + str(self.gas))
#
#   def print_stats(self):
#     self.print_km()
#     self.print_gas()
#
# trabant = Car(120000, 50)
# trabant.ride(11)
# trabant.print_stats()

# def is_fizzish(number, base):
#     return number % base == 0 or str(base) in str(number)
#
# def fizz_buzz(minimum, maximum):
#     # print(kutyaaa)
#     fizz_number = 3
#     buzz_number = 5
#     n = minimum
#     while n <= maximum:
#         if is_fizzish(n, fizz_number) and is_fizzish(n, buzz_number):
#             print('fizzbuzz')
#         elif is_fizzish(n, buzz_number):
#             print('buzz')
#         elif is_fizzish(n, fizz_number):
#             print('fizz')
#         else:
#             print(n)
#         n += 1
#
# fizz_buzz(1, 15)
#
# class Fizbuzz(object):
#     def __init__(self, arg):
#         super(, self).__init__()
#         self.arg = arg

# class Dog:
#
#     def __init__(self, name):
#         self.name = name
#         self.tricks = []             # mistaken use of a class variable
#
#     def add_trick(self, trick):
#         self.tricks.append(trick)
#
# d = Dog('Fido')
# e = Dog('Buddy')
# d.add_trick('roll over')
# e.add_trick('play dead')
# print(d.name, d.tricks)

# class Bag:
#     def __init__(self):
#         self.data = []
#
#     def add(self):
#         self.data.append
#
#     def addtwice(self):
#         self.add
#         self.add
#
# szatyor = Bag
# szatyor.add(1)
# szatyor.addtwice(2)
# print(data.szatyor)

szavak = ['aabb', 'abcd', 'bbaa', 'dada']
szo = 'abba'
def anagrams(word, words):
    word = sorted(word)
    anagramms = []
    for i in words:
        if sorted(i) == word:
            anagramms.append(i)
    return(anagramms)

print(anagrams(szo, szavak))





# usage: dude_gonna_tell_bout_bigness(5)
