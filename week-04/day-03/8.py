# create a 300x300 canvas.
# create a square drawing function that takes 2 parameters:
# the x and y coordinates of the square's top left corner
# and draws a 50x50 square from that point.
# draw 3 squares with that function.

from Tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()
a = 50
b = 50

lime_box = canvas.create_rectangle(a, b, 100, 20, fill='lime green')
lime_box = canvas.create_rectangle(a, b, 0, 40, fill='red')
lime_box = canvas.create_rectangle(a, b, 260, 210, fill='blue')

root.mainloop()
