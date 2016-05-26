# 2. write a recursive function
# that takes one parameter: n
# and adds numbers from 1 to n


def countdown(n):
    if n > 0:
        n -= 1
        print (n)
        countdown(n)
    else:
        pass
countdown(7)
