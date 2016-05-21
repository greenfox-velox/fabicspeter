
names = ['Zakarias', 'Hans', 'Otto', 'Ole']
# create a function that returns the shortest string
# from a list

def short(x):
    the_shorrtest = x[0]
    for i in x:
        if len(i) < the_shorrtest:
            the_shorrtest = i
    return the_shorrtest

print (short(names))
