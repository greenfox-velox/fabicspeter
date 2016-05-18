# print the numbers till ad from 0
ad = 6
i = 0
while i <= ad:
    print(i)
    i += 1

ae = 4
text = 'Gold'
a = 0
while ae > 0:
    print (text)
    ae -= 1
# print content of the text variable ae times


af = [4, 5, 6, 7]
# print all the elements of af
a = 0
while a != len(af):
    print (af[a])
    a += 1

ag = [3, 4, 5, 6, 7]
# please double all the elements of the list
b = 0
while b != len(ag):
    print ((ag[b]) * 2)
    b += 1

ah = ['kuty', 'macsk', 'cic']
# add to all elements an 'a' on the end
g = 0
while g != len(ah):
    print ((ah[g]) + 'a')
    g += 1

ah = [3, 4, 5, 6, 7]
# print the sum of all numbers in ah
total = 0
a = 0
while a != len(ah):
    total += ah[a]
    a += 1
print (total)

# print the even numbers till 20
a = 0
while a <= 20:
    print(a)
    a += 2
# Write a program that prints the numbers from 1 to 100.
# But for multiples of three print "Fizz" instead of the number
# and for the multiples of five print "Buzz".
# For numbers which are multiples of both three and five print "FizzBuzz".
n = 0
while n <= 100:
    if n % 3 == 0 and n % 5 == 0:
        print("FizzBuzz")
    elif  n % 3 == 0:
        print("Fizz")
    elif n % 5 == 0:
        print("Buzz")
    else:
        print(n)
    n += 1
