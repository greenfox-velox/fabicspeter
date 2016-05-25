from Tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

from Tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

teal_line = canvas.create_line(50, 150, 50, 50, fill='green')
teal_line = canvas.create_line(50, 50, 150, 50, fill='red')
teal_line = canvas.create_line(150, 50, 150, 150, fill='blue')
teal_line = canvas.create_line(50, 150, 150, 150, fill='orange')

root.mainloop()
