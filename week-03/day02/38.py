
numbers = [7, 5, 8, -1, 2, -10]
# Write a function that returns the minimal element
# in a list (your own min function)

def small(x):
    min = x[0]
    for i in (x):
        if i < min:
            min = i
    return min

print (small(numbers))
