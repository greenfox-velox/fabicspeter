# from tkinter import *
# root = Tk()
# canvas = Canvas(root, width='600', height='600')
# canvas.pack()
# kocka = canvas.create_image(0, 0, image = 'floor.png', anchor = NW)
# print(kocka)
# root.mainloop()
from tkinter import *

root = Tk()
canvas = Canvas(root, width='720', height='820')
canvas.pack()
picture1 = PhotoImage(file = 'floor.png')
picture2 = PhotoImage(file = 'wall.png')
class floor_painter():
    def __init__(self, floor):
        self.floor = picture1
m = [
     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
     [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
     [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
     [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
     [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
     [0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
     [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
     ]
for n in range(len(m)):
    for i in range(len(m[n])):
        if m[n][i] == 0:
            canvas.create_image(i * 72,n * 72, image = picture1, anchor = NW)
        else:
            canvas.create_image(i * 72, n * 72, image = picture2, anchor = NW)


root.mainloop()
