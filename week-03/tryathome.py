
def reverse(x):
    n = "" + x
    for i in range(len(x)):
        n += x[len(x) - i - 1]
    return n
if reverse(x) == "reap":
    print(okay)
print reverse('pear')




word = "nepalapen"
is_palindrome = word.find(word[::-1])
print is_palindrome



def is_prime(x):
    if x < 2:
        print False
    else:
        for n in range(2, x):
            if x % n == 0:
                print False
        print True

is_prime(10)

def reverse(text):
    return text[::-1]


def is_palindrome(text):
    return text == reverse(text)


something = input("Enter text: abba")
if is_palindrome(something):
    print("Yes, it is a palindrome")
else:
    print("No, it is not a palindrome")