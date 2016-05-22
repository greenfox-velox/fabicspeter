# create a pirate class
# it should have 2 methods
# drink_rum()
# hows_goin_mate()
# if the drink_rum was called at least 5 times:
# hows_goin_mate should return "Arrrr!"
# "Nothin'" otherwise

class Pirate:
    rum = 0

    def how_its_going_mate(self):
        if self.rum <= 5:
            print('Nothing')
        else:
            print('Arrrr')

    def drink_rum(self):
        self.rum += 1
        return self.rum

Ramos = Pirate()
Ramos.how_its_going_mate()
Ramos.drink_rum()
Ramos.drink_rum()
Ramos.drink_rum()
Ramos.drink_rum()
Ramos.drink_rum()
Ramos.drink_rum()
Ramos.how_its_going_mate()
