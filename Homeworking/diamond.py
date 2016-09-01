def diamond(n):
        if n <= 0:
            return(None)
        if n % 2 == 0:
            return("NULL")
        else:
            n = int(n / 2 + 1)
            c = ''
            for x in list(range(n)) + list(reversed(range(n - 1))):
                c += (('{: <{w1}}{:*<{w2}}'.format('', '', w1=n-x-1, w2=x*2+1))+ '\n')
            return(c)
print(diamond(0))
