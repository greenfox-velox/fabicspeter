# from tkinter import *
# root = Tk()
# canvas = Canvas(root, width='600', height='600')
# canvas.pack()
# kocka = canvas.create_image(0, 0, image = 'floor.png', anchor = NW)
# print(kocka)
# root.mainloop()
from tkinter import *

root = Tk()
canvas = Canvas(root, width='720', height='720')
canvas.pack()

picture1 = PhotoImage(file = 'floor.png')
m = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
     [0, 0, 0, 0, 1, 0, 0, 0, 0, 0]
     [0, 0, 0, 0, 0, 1, 0, 0, 0, 0]
     [0, 0, 0, 1, 0, 0, 0, 0, 0, 0]
     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
     [0, 0, 1, 0, 0, 0, 0, 0, 0, 0]
     [0, 0, 0, 1, 0, 0, 0, 0, 0, 0]
     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]

for n in range(0, 10):
    for i in range(0, 10):
        canvas.create_image(n * 72, i * 72, image = picture1, anchor = NW)


root.mainloop()
