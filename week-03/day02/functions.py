ae = "Jozsi"
# create a function that greets ae

def greet(name):
  print("Szia,", name)
greet(ae)


def test(expected, actual):
    if expected == actual:
        print('Check')
    else:
        print('jaj')
test('hello, Jozsi', greet(ae))

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

# create a function that returns it's input factorial



numbers = [3, 4, 5, 6, 7]
# write a function that reverses a list

numbers = [3, 4, 5, 6, 7]
numbers.reverse();
print (numbers)



numbers = [3, 4, 5, 6, 7]
# write a function that filters the odd numbers
# from a list and returns a new list consisting
# only the evens

def filteroddout(arg):
    filtered = []
    for each in arg:
        if each % 2 == 0:
            filtered.append(each)
    return filtered

print (filteroddout(numbers))



numbers = [7, 5, 8, -1, 2]
# Write a function that returns the minimal element
# in a list (your own min function)
numbers = [7, 5, 8, -1, 2]
# Write a function that returns the minimal element
# in a list (your own min function)
def return_min(arg):
    min = arg[0]
    for each in arg:
        if min > each:
           min = each
    return min
print(return_min(numbers))
