number = 1
god = 'jehova'

print(number)

def print_n():
    #global god
    god = 'Zeus'
    print ('inner god', god)
    print(number)

print_n()
print(god)