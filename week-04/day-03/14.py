# create a 300x300 canvas.
# create a line drawing function that takes 2 parameters:
# the x and y coordinates of the line's starting point
# and draws a line from that point to the center of the canvas.
# fill the canvas with lines from the edges, every 20 px, to the center.

from Tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()
for i in range (0, 300, 20):
    teal_line = canvas.create_line(0, i, 150, 150, fill='green')
    teal_line = canvas.create_line(i, 0, 150, 150, fill='green')
    teal_line = canvas.create_line(150, 150, 300, i, fill='green')
    teal_line = canvas.create_line(150, 150, i, 300, fill='green')

root.mainloop()
