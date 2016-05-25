from Tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

lime_box = canvas.create_rectangle(140, 140, 160, 160, fill='lime green')

root.mainloop()
