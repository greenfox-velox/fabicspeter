from tkinter import *


root = Tk()
canvas = Canvas(root, width=720, height=1000, bg='white')
canvas.pack()

floor_image = PhotoImage(file='floor.png')
wall_image = PhotoImage(file='wall.png')
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
        canvas.create_image(self.column * self.size, self.row * self.size, image=img, anchor=NW)


class FloorTile(Tile):
    def __init__(self, x, y):
        super().__init__(x, y)
        self.floor_image = floor_image

    def draw(self):
        super().draw_tile(self.floor_image)

class WallTile(Tile):
    def __init__(self, x, y):
        super().__init__(x, y)
        self.wall_image = wall_image

    def draw(self):
        super().draw_tile(self.wall_image)

class Boss(Tile):
    def __init__(self, x, y):
        super().__init__(x, y)
        self.boss_image = boss_image

    def draw(self):
        super().draw_tile(self.boss_image)

class Skeleton(Tile):
    def __init__(self, x, y):
        
        self.skeleton_image = skeleton_image

    def draw(self):
        super().draw_tile(self.skeleton_image)

class Hero(Tile):
    def __init__(self, x, y):
        super().__init__(x, y)
        print(self.row)
        self.hero_image = hero_image_down

    def draw(self):
        super().draw_tile(self.hero_image)

    def move_up(self, event):
        self.new_pos_row = self.row - 1
        if self.new_pos_row >= 0 and level.static_map[self.new_pos_row][self.column] != 0:
            self.row -= 1
            self.hero_image = hero_image_up
            level.draw_game_map()
            super().draw_tile(self.hero_image)
            print(self.column, self.row)
        else:
            level.draw_game_map()
            self.hero_image = hero_image_up
            super().draw_tile(self.hero_image)

    def move_down(self, event):
        self.new_pos_row = self.row + 1
        if self.new_pos_row <= 10 and level.static_map[self.new_pos_row][self.column] != 0:
            self.row += 1
            self.hero_image = hero_image_down
            level.draw_game_map()
            super().draw_tile(self.hero_image)
            print(self.column, self.row)
        else:
            level.draw_game_map()
            self.hero_image = hero_image_down
            super().draw_tile(self.hero_image)

    def move_left(self, event):
        self.new_pos_column = self.column - 1
        if self.new_pos_column >= 0 and level.static_map[self.row][self.new_pos_column] != 0:
            self.column -= 1
            self.hero_image = hero_image_left
            level.draw_game_map()
            super().draw_tile(self.hero_image)
            print(self.column, self.row)
        else:
            level.draw_game_map()
            self.hero_image = hero_image_left
            super().draw_tile(self.hero_image)

    def move_right(self, event):
        self.new_pos_column = self.column + 1
        if self.new_pos_column <= 10 and level.static_map[self.row][self.new_pos_column] != 0:
            self.column += 1
            self.hero_image = hero_image_right
            level.draw_game_map()
            super().draw_tile(self.hero_image)
            print(self.column, self.row)
        else:
            level.draw_game_map()
            self.hero_image = hero_image_right
            super().draw_tile(self.hero_image)


class GameMap:
    def __init__(self, static_map):
        self.static_map = static_map

    def create_map_draw_list(self):
        self.map_draw_list = []
        for row in range(0, len(self.static_map)):
            for column in range(0, len(self.static_map[row])):
                if self.static_map[row][column] == 1:
                    self.map_draw_list.append(FloorTile(column, row))
                elif self.static_map[row][column] == 0:
                    self.map_draw_list.append(WallTile(column, row))
                elif self.static_map[row][column] == 2:
                    self.map_draw_list.append(FloorTile(column, row))
                    self.map_draw_list.append(Skeleton(column, row))
                elif self.static_map[row][column] == 3:
                    self.map_draw_list.append(FloorTile(column, row))
                    self.map_draw_list.append(Boss(column, row))

    def draw_game_map(self):
        canvas.delete('all')
        for i in self.map_draw_list:
            i.draw()


tile_coordinates_static_map = (
    [1, 1, 1, 0, 1, 0, 1, 1, 1, 1],
    [1, 1, 1, 0, 1, 0, 1, 0, 0, 1],
    [1, 0, 0, 0, 1, 0, 1, 0, 0, 1],
    [2, 1, 1, 1, 1, 0, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 1, 0, 2, 0, 0, 1, 0, 1],
    [1, 1, 1, 1, 1, 0, 0, 1, 0, 1],
    [1, 0, 0, 0, 1, 1, 3, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 1, 1, 1]
)


hero_spawn = [0, 3]

level = GameMap(tile_coordinates_static_map)
level.create_map_draw_list()
level.draw_game_map()

hero = Hero(hero_spawn[0], hero_spawn[1])
hero.draw_tile(hero_image_down)

root.bind("<Up>", hero.move_up)
root.bind("<Down>", hero.move_down)
root.bind("<Left>", hero.move_left)
root.bind("<Right>", hero.move_right)

root.mainloop()
