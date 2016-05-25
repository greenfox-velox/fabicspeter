# create a 300x300 canvas.
# create a square drawing function that takes 1 parameter:
# the square size
# and draws a square of that size to the center of the canvas.
# draw 3 squares with that function.

from Tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()
a = (120, 120, 180, 180)
b = (110,110, 190, 190)
c = (0, 0, 300, 300)
lime_box = canvas.create_rectangle(c, fill='lime green')
lime_box = canvas.create_rectangle(b, fill='red')
lime_box = canvas.create_rectangle(a, fill='blue')

root.mainloop()
