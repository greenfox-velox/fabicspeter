numbers = [3, 4, 5, 6, 7]
numbers2 = [3, 4, 5, 6, 7, 8, 10]
# write a function that filters the odd numbers
# from a list and returns a new list consisting
# only the evens

def paros(x):
    parlist = []
    for i in x:
        if i % 2 == 0:
            parlist.append(i)
    return parlist
print (paros(numbers2))
