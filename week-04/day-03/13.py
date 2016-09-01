
from Tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()
for i in range(0, 4):
    a = (2 ** i)* 10
    print (i)

    lime_box = canvas.create_rectangle(a, a, 2+a, 2+a, fill='lime green')


root.mainloop()
