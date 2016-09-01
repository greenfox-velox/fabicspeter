from Tkinter import *

root = Tk()

canvas = Canvas(root, width='600', height='600')
canvas.pack()
def create_triangule(x, y, s):

    canvas.create_polygon([x, y, x + s, y, x + s / 2, y + 3 ** 0.5 / 2 * s ], outline ='black', fill='white')

def create_fractal(x, y, s):
    create_triangule(x, y, s)
    if s > 50:
        create_fractal(x + s / 2, y, s / 2)
        create_fractal(x, y, s / 2)
        create_fractal(x + s / 4, y + 3 ** 0.5 / 2 * s / 2, s / 2)

create_fractal(0, 0, 600)
root.mainloop()
