# create a function that returns it's input factorial

def factor(x):
    total = 1
    for i in range (x):
        total *= i + 1
    return total

print (factor(4))
