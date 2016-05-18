ae = "Jozsi"
# create a function that greets ae

def greet_by_name(name):
  print("Szia,", name)
greet_by_name("Jozsi")

af = 123
# create a function that doubles it's input
# double af with it
def double(number):
    number *= 2
    return number
af = double(af)
print(af)

ag = 'kuty'
# write a function that gets a string as an input
# and appends an 'a' character to its end
def add_a(word):
    word = word + "a"
    return word
ag = add_a(ag)
print(ag)

# write your own sum function
numbers = [4, 5, 6, 7, 8, 9, 10]
def sum(numbers):
    total = 0
    for a in numbers:
        total += a
    return total
print(sum(numbers))
