# create a 300x300 canvas.
# create a square drawing function that takes 2 parameters:
# the square size, and the fill color,
# and draws a square of that size and color to the center of the canvas.
# create a loop that fills the canvas with rainbow colored squares.


from Tkinter import *

root = Tk()
import random
canvas = Canvas(root, width='300', height='300')
canvas.pack()

for i in range (0, 60, 3):
    x = random.randrange(10,99)
    y = random.randrange(10,99)
    z = random.randrange(10,99)
    color = '#' + str(x) + str(y) + str(z)

    a = (60 + i, 60 + i, 240 - i, 240 - i)

    lime_box = canvas.create_rectangle(a, fill= color)

root.mainloop()
