from tkinter import *


root = Tk()
canvas = Canvas(root, width=720, height=1000, bg='white')
canvas.pack()

hero_image_down = PhotoImage(file='hero-down.png')
hero_image_up = PhotoImage(file='hero-up.png')
hero_image_left = PhotoImage(file='hero-left.png')
hero_image_right = PhotoImage(file='hero-right.png')
skeleton_image = PhotoImage(file='skeleton.png')
boss_image = PhotoImage(file='boss.png')


class Tile():
    def __init__(self, x, y):
        self.size = 72
        self.row = y
        self.column = x

    def draw_tile(self, img):
        canvas.create_image(self.row * self.size, self.column * self.size, image = img, anchor=NW)


class Floor(Tile):
    def __init__(self, x, y):
        super().__init__(x, y)
        self.floor_image = PhotoImage(file='floor.png')

    def draw(self):
        super().draw_tile(self.floor_image)


class wall(Tile):
    def __init__(self, x, y):
        super().__init__(x, y)
        self.wall_image = PhotoImage(file='wall.png')

    def draw(self):
        super().draw_tile(self.wall_image)


class Char():
    def __init__(self, x, y):
        self.size = 72
        self.row = x
        self.column = y

    def draw_tile(self, img):
        canvas.create_image(self.column * self.size, self.row * self.size, image=img, anchor=NW)


class HeroImage(Char):
    def __init__(self, x, y):
        super().__init__(x, y)
        print(self.row)
        self.hero_image = hero_image_up

    def draw(self):
        super().draw_tile(self.hero_image)

    def Hero_down(self, event):

        self.changed_position_r = self.row + 1
        if self.changed_position_r < 10:
            self.row += 1
            self.hero_image = hero_image_down
            basic_map.draw_game_map()
            super().draw_tile(self.hero_image)
            print(self.column, self.row)

    def Hero_upp(self, event):
        self.changed_position_r = self.row -1
        if self.changed_position_r >= 0:
            self.row -= 1
            self.hero_image = hero_image_up
            basic_map.draw_game_map()
            super().draw_tile(self.hero_image)
            print(self.column, self.row)

    def Hero_right(self,event):
        self.changed_position_c = self.column + 1
        if self.changed_position_c < 10:
            self.column += 1
            self.hero_image = hero_image_right
            basic_map.draw_game_map()
            super().draw_tile(self.hero_image)
            print(self.column, self.row)


    def Hero_left(self, event):
        self.changed_position_c = self.column - 1
        if self.changed_position_c >= 0:
            self.column -= 1
            self.hero_image = hero_image_left
            basic_map.draw_game_map()
            super().draw_tile(self.hero_image)
            print(self.column, self.row)

class GameMap():
    def __init__(self, map):
        self.map = map

    def create_map_draw_list(self):
        self.map_list = []
        for row in range(0, len(self.map)):
            for column in range(0, len(self.map[row])):
                if self.map[row][column] == 0:
                    self.map_list.append(Floor(row, column))
                elif self.map[row][column] == 1:
                    self.map_list.append(wall(row, column))

    def draw_game_map(self):
        canvas.delete('all')
        for i in self.map_list:
            i.draw()

map_cordinates = (
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 0, 0, 0, 1, 0],
    [0, 0, 1, 1, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 1, 0, 0, 0, 0]
)

hero_spawn = [0, 0]

basic_map = GameMap(map_cordinates)
basic_map.create_map_draw_list()
basic_map.draw_game_map()

super_mario = HeroImage(0, 0)
super_mario.draw()
root.bind("w", super_mario.Hero_upp)
root.bind("s", super_mario.Hero_down)
root.bind("d", super_mario.Hero_right)
root.bind("a", super_mario.Hero_left)

hero = Char(hero_spawn[0], hero_spawn[1])
hero.draw_tile(hero_image_down)

root.mainloop()
