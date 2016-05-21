def reverse(x):
    n = ""
    for i in range(len(x)-1, -1, -1 ):
        n += x[i]
    if x == n:
        print(x 'egyenlő')
    else:
        print(n + 'Nem egyenlő')
    return n

reverse('')

def szoveg(x):
    n = []
    for i in range(len(x)):
        for j in range(i + 2, len(x)):
            print(x[i: j])



def reverse(x):
    n = (x) + ""
    for i in range(len(x)):
        n += x[len(x) - i - 1]
    return n
print reverse('kutya')
