# 7. Given a string, compute recursively (no loops) a new string where all the
# lowercase 'x' chars have been changed to 'y' chars.

def bunnie(b):
    if b > 0 and b % 2 == 0:
        return 2 + bunnie(b - 1)
    elif b > 0 and b % 2 == 1:
        return 3 + bunnie(b - 1)
    else:
        return 0

print (bunnie(5))
