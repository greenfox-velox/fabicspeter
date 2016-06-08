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


class FloorTile(Tile):
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


class Character_hero():
    def __init__(self, x, y):
        self.size = 72
        self.row = x
        self.column = y

    def draw_character(self, img):
        canvas.create_image(self.column * self.size, self.row * self.size, image=img, anchor=NW)


class HeroImage(Character_hero):
    def __init__(self, x, y):
        super().__init__(x, y)
        self.hero_image = hero_image_down

    def draw(self):
        super().draw_character(self.hero_image)


class GameMap():
    def __init__(self, map):
        self.map = map

    def create_map_draw_list(self):
        self.map_draw_list = []
        for row in range(0, len(self.map)):
            for column in range(0, len(self.map[row])):
                if self.map[row][column] == 0:
                    self.map_draw_list.append(FloorTile(row, column))
                elif self.map[row][column] == 1:
                    self.map_draw_list.append(wall(row, column))

    def draw_game_map(self):
        for i in self.map_draw_list:
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

level1 = GameMap(map_cordinates)
level1.create_map_draw_list()
level1.draw_game_map()

hero = Character_hero(hero_spawn[0], hero_spawn[1])
hero.draw_character(hero_image_down)

root.mainloop()
