from Tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()
for i in range(0, 200, 10):
    print (i)

    a = (0 + i, 0 + i, 10 + i, 10 + i)

    lime_box = canvas.create_rectangle(a, fill='lime green')


root.mainloop()
