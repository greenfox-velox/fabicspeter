# create a 300x300 canvas.
# create a line drawing function that takes 2 parameters:
# the x and y coordinates of the line's starting point
# and draws a line from that point to the center of the canvas.
# draw 3 lines with that function.

from Tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()
teal_line = canvas.create_line(1, 1, 1, 299, fill='green')
teal_line = canvas.create_line(1, 1, 299, 1, fill='red')
teal_line = canvas.create_line(299, 1, 299, 299, fill='blue')
teal_line = canvas.create_line(1, 299, 299, 299, fill='orange')
root.mainloop()
