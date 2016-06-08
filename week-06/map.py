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
# picture1 = PhotoImage(file = 'floor.png')
# picture2 = PhotoImage(file = 'wall.png')
class background():
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def paint_bckgr(self, canvas):
        canvas.create_image(self.y * 72,self.x * 72, image = self.img, anchor = NW)

class floor(background):
    def __init__(self, x, y):
        super().__init__(x, y)
        self.img = PhotoImage(file= 'floor.pmg')

class wall(background):
    def __init__(self, x, y):
        self.img = PhotoImage(file = 'wall.png')


class board():
    def __init__(self, canvas, field_input):
        self.canvas = canvas
        self.field_input = field_input

    def create_field(self):
        self.output = []
        for i in range(len(self.field_input)):
            for k in range(len(self.field_input[i])):
                if self.field_input[i][k] == 1:
                    self.output(Floor(i,k))
                else:
                    self.outputappend(Wall(i,k))

    def make_a_board(self):
        for i in self.output:
            i.draw(self.canvas)


# class floor_painter():
#     def __init__(self, x, y):
#         self.floor = PhotoImage(file = 'floor.png')
#
# class wall_painter():
#     def __init__(self, wall):
#         self.wall = PhotoImage(file = 'wall.png')

# def main():
#     root = Tk()
#     canvas = Canvas(root, width 720, height = 720)
#     canvas.pack()

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
         [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],]
# for n in range(len(m)):
#     for i in range(len(m[n])):
#         if m[n][i] == 0:
#             canvas.create_image(i * 72,n * 72, image = self.floor, anchor = NW)
#         else:
#             canvas.create_image(i * 72, n * 72, image = self.wall, anchor = NW)
    level1 = board(canvas, m)
    level1.create_field()
    level1.make_a_board()

root.mainloop()
