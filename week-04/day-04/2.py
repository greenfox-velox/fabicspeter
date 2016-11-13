# 2. write a recursive function
# that takes one parameter: n
# and adds numbers from 1 to n


def countdown(n):
    if n > 0:
        print (n)
        countdown(n - 1)
    else:
        pass
countdown(7)
