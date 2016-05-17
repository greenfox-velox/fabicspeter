a = 3
a += 10
print (a)
b = 100
b -= 7
print (b)
c = 44
c = 44 * 2
print (c)
e = 8
e **= 3
# e = e ** 3
print(e)
f = 16
f = f ** (1 / 2)
print(f)
g1 = 123
g2 = 345
print(g1 > g2)
h1 = 350
h2 = 200
print(h2 * 2 > h1)
i = 1357988018575474
print( i % 11)
j1 = 10
j2 = 3
print (j2 **3 > j1 > j2 ** 2 )
k = 1521
print ((k % 3 == 0) or (k % 5 == 0))
l = 'python'   # Tell the 2nd letter of the word
print(l[1])
m = 'Apple'   # fill the m variable with its cotnent 4 times
print( m * 4)
n = 'The result is: '
a = 2
b = 3   # concat the product of a and b to the n string
n = n + str(a * b)
print (n)
o = "pneumonoultramicroscopicsilicovolcanoconiosis"  # tell how many letters in o
print(len(o))

p1 = [1, 2, 3]
p2 = [4, 5]
# tell if p2 has more elements than p17
print(len(p2) > len(p1))
q = [4, 5, 6, 7]
# get the 3rd element of q
print (q[2])
r = [54, 23, 66, 12]
# add the second the third
print(r[1] + r[2])

s = [1, 2, 3, 8, 5, 6]
# change the 8 to 4
s[3] = 4
print (s)



u = 123
# print 'Hooray!' if the number is bigger than 100

if u >= 100:
    print("Horray")
else:
    print(None)

v = 426  # print 'Yeah!' if dividable by 4 but print 'End of program' after regardless
if v % 4 == 0:
    print("yeah")
print("End of program")

w = 24
out = 0
# if w is even increment out by one
if w % 2 == 0:
    out += 1
print(out)

x = 'monkey'
# if the string is longer than 4 characters
# print 'Long!' otherwise print 'Short!'
if len(x) > 4:
    print("Long")
else:
    print("short")

x = 'cheese'
# Tell if the x has even or odd number of
# characters with a True for even and
# false False output otherwise
if len(x) % 2 == 0:
    print("even")
else:
    print("odd")

y = 'seasons'
out = 6
# if the last and the first letter of the string
# are the same double the variable
# called out, if not half it
if y[0] == y[6]:
    out *= 2
else:
    out /= 2
print(out)


z = 13
# if z is between 10 and 20 print 'Sweet!'
# if less than 10 print 'More!',
# if more than 20 print 'Less!'
if 20 >= z >=10:
    print('Sweet')
elif z > 10:
    print('more')
else:
    print('Less')

aa = [1, 2, 3]
out = 0
# if the aa list contains one element set the out to 1
# if the aa list contains two element set the out to 2
# if the aa list contains more than 2 set the out to 10
# if the aa contains no elements it should set to -1
if len(aa) == 1:
    print(out + 1)
elif len(aa) == 2:
    print(out + 2)
elif len(aa) >= 3:
    print(out + 10)
else:
    print(out - 1)

ab = 123
credits = 100
is_bonus = False
# if credits are at least 50,
# and is_bonus is False decrement ab by 2
# if credits are smaller than 50,
# and is_bonus is False decrement ab by 1
# if is_bonus is True ab should remain the same

if credits >= 50 and is_bonus == False:
    print(ab - 2)
elif credits <= 50 and is_bonus == False:
    print(ab - 1)
if is_bonus == True:
    print(ab)

ac = 8
time = 120
out = ''
# if ac is dividable by 4
# and time is not more than 200
# set out to 'check'
# if time is more than 200
# set out to 'Time out'
# otherwise set out to 'Run Forest Run!'

if ac % 4 == 0 and time <= 200:
    print("check")
elif time >= 200:
    print("time out")
else:
    print("Run forst run!!")
