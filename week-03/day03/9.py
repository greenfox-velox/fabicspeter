# create a pirate class
# it should have 2 methods
# drink_rum()
# hows_goin_mate()
# if the drink_rum was called at least 5 times:
# hows_goin_mate should return "Arrrr!"
# "Nothin'" otherwise


class Pirate:
    def __init__(self):
        self.i = 0

    def drink_rum(self):
        self.i += 1

    def hows_going_mate(self):
        if self.i >= 5:
            return "Arrrr!"
        else:
            return "Nothing"

pirat1 = Pirate()
pirat2 = Pirate()
print (pirat1.hows_going_mate())
pirat1.drink_rum()
pirat1.drink_rum()
pirat1.drink_rum()
pirat1.drink_rum()
pirat1.drink_rum()
print (pirat1.hows_going_mate())