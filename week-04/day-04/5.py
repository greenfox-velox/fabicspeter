# 5. We have a number of bunnies and each bunny has two big floppy ears.
# We want to compute the total number of ears across all the bunnies
# recursively (without loops or multiplication).

def bunnie(b):
    if b > 0:
        return 2 + bunnie(b - 1)
    else:
        return 0

print (bunnie(5))
