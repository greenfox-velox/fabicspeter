# create a 300x300 canvas.
# create a line drawing function that takes 2 parameters:
# the x and y coordinates of the line's starting point
# and draws a line from that point to the center of the canvas.
# draw 3 lines with that function.

from Tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()
a = 10
b = 20
teal_line = canvas.create_line(a, b, 150, 150, fill='blue')
teal_line = canvas.create_line(a, b, 150, 150, fill='orange')
teal_line = canvas.create_line(a, b, 150, 150, fill='lime green')
root.mainloop()
