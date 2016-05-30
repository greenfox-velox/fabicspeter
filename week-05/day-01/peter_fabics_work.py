import unittest
import basics
import crypto_1dup

class TestIO(unittest.TestCase):

def sorting(x, y):
    x = x.upper()
    y = y.upper()
    if sorted(x) == sorted(y):
        print True
    else:
        print False

sorting('kacsa', 'CSaka')



def count(string):
    d = {}
    for w in string:
        d[w] = string.count(w)
    for k in sorted(d):
        print (k + ' x ' + str(d[k]))

count('ventillatorba')

if __name__ == '__main__':
    unittest.main()
