# create a 300x300 canvas.
# create a square drawing function that takes 1 parameter:
# the square size
# and draws a square of that size to the center of the canvas.
# create a loop that draws 20 squares with that function.

from Tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()
for i in range (0, 60, 3):

    a = (60 + i, 60 + i, 240 - i, 240 - i)

    lime_box = canvas.create_rectangle(a, fill='blue')


root.mainloop()
