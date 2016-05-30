def sorting(x, y):
    x = x.upper()
    y = y.upper()
    if sorted(x) == sorted(y):
        return True
    else:
        return False

sorting('kacsa', 'CSaka')

def count(string):
    d = {}
    for w in string:
        d[w] = string.count(w)
    for k in sorted(d):
        return d
        #print (k + ' x ' + str(d[k]))

count('ventillatorba')
