from Tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

lime_box = canvas.create_rectangle(50, 50, 100, 90, fill='lime green')
lime_box = canvas.create_rectangle(150, 150, 100, 90, fill='red')
lime_box = canvas.create_rectangle(200, 200, 260, 210, fill='blue')

root.mainloop()
