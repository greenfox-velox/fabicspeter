def reverse(x):
    n = "" + x
    for i in range(len(x)):
        n += x[len(x) - i - 1]
    return n
    def reverse(x):
        print(x)

print reverse('pear')




def is_prime(x):
    if x < 2:
        print False
    else:
        for n in range(2, x):
            if x % n == 0:
                print False
        print True

is_prime(10)