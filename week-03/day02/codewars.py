# numbers = [1,2,'a','b']
# def no_ints(numbers):
#     no_integers = [x for x in numbers if not isinstance(x, str)]
#     return(no_integers)


# s = '123456a'
# def validation(x):
#     result = ''.join([i for i in x if i.isdigit()])
#     result2 = ''.join([i for i in x if not i.isdigit()])
#     counter = 0
#     counter2 = 0
#     for i in result2:
#         counter2 += 1
#     for i in result:
#         counter += 1
#     if counter == 4 and counter2 == 0 or counter == 6 and counter2 == 0:
#         return(True)
#     else:
#         return(False)
#
# print (validation(s))

# a = 'abcdef'
# c = a[:-1]
# print(c)
# price = 1123456
# def to_currency(x):
#     x = str(x)
#     a = ''
#     for i in x:
#         a += i
#     rev_a = a[::-1]
#     correct_currency = ''
#     string_counter = 0
#     for s in rev_a:
#         if string_counter % 3 != 0 and string_counter != 0:
#             correct_currency += s
#             string_counter += 1
#         else:
#             correct_currency += ',' + s
#             string_counter += 1
#     correct_cur = correct_currency[::-1]
#     correct_cucy = correct_cur[:-1]
#     return(correct_cucy)
#
# print(to_currency(price))
    # your code here

# def is_square(n):
#   x = n // 2
#   seen = set([x])
#   if n <= 1:
#       return False
#   else:
#       while x * x != n:
#         x = (x + (n // x)) // 2
#         if x in seen: return False
#         seen.add(x)
#       return True
#
# print (is_square(4))
# c = [5, 0, -1]
# # d = sorted(c)
# # print(d)
# def is_monotone(heights):
#     s = sorted(heights)
#     print(s)
#     if s == heights:
#         return True
#     else:
#         return False
#
# print(is_monotone(c))

# apple=[
# ["A","A","B","A","A"],
# ["A","A","A","A","A"],
# ["A","A","A","A","A"],
# ["A","A","A","A","A"],
# ["A","A","A","A","A"]
# ]
# for i in apple:
#     print(i)
#     x = 0
#     y = 0
#     j = 0
#     for c in i:
#         j += 1
#         if c == 'B':
#             break
# def calculate_years(principal, interest, tax, desired):
#     interest = 1.00 + interest
#     years = 0
#     while principal < desired:
#         principal = principal * interest - (( principal * interest - principal) * tax)
#         years += 1
#     return(years)
#
#
# print(calculate_years(1000.00, 0.05, 0.18, 1200.00))

# def meters(x):
#     if (len(str(x))) < 4:
#         return (str(x) + 'm')
#     if (len(str(x))) >= 4 and (len(str(x))) < 7:
#         return ( str(x / 1000) + "km")
#     if (len(str(x))) >= 8 and (len(str(x))) < 10:
#         return ( str(x / 1000000) + "Mm")
#     if (len(str(x))) >= 10:
#         return ( str(x / 1000000000) + "Gm")
#     #your code here
#
# print(meters(10000))
# a = []
# b = [2, 1, 4]
# l3 = [x for x in a if x not in b]
# print(l3)
# def array_diff(a, b):
#     # a = int(a)
#     # b = int(b)
#     return(a)
#     #your code here
# print(array_diff(a,b))

# import math
#
#
# def combination(n, r):
#     return int((math.factorial(n)) / ((math.factorial(r)) * math.factorial(n - r)))
#
# def for_test(x, y):
#     for y in range(x):
#         return combination(x, y)
#
# def pascal(rows):
#     result = []
#     for count in range(rows):
#         row = []
#         for element in range(count + 1):
#             row.append(combination(count, element))
#         result.append(row)
#     return result
#
# for row in pascal(10):
#     print(row)
# a = 'AAAABBBCCDAABBQA'
# print(a[4])
# def unique_in_order(iterable):
#     new_list = []
#     index_a = -2
#     for i in iterable:
#         index_a += 1
#         if iterable[-1] != iterable[0]:
#             if i != iterable[index_a]:
#                 new_list += i
#          if i != iterable[index_a] and len(iterable) > 1:
#              new_list += i
#         else:
#             if i != iterable[index_a]:
#                 new_list += i
#     return new_list
# print(unique_in_order(a))

# import itertools
# def findsubsets(S,m):
#     return set(itertools.combinations(S, m))
#
# print(findsubsets(1, 2))
