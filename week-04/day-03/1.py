from Tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

teal_line = canvas.create_line(0, 150, 150, 150, fill='green')
teal_line = canvas.create_line(150, 150, 300, 150, fill='red')


root.mainloop()
