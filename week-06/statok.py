class Basic_stats(object):
    def __init__(self):
        self.hp = 50
        self.attack = 20

    def fight(self, atacked):
        if atacked.hp > 0 and:
            atacked.hp -= self.attack * self.balta.szorzo
            self.hp -= atacked.attack
            self.hp += self.pajzs.defend
        else:
            pass

class Balta(object):
    def __init__(self):
        self.szorzo = 1.2

class Pajzs(object):
    def __init__(self):
        self.defend = 1.5

class Hero(Basic_stats):
    def __init__(self):
        super().__init__()
        self.hp += 50
        self.attack += 5
        self.balta = Balta()
        self.pajzs = Pajzs()

class Defender(Basic_stats):
    def __init__(self):
        super().__init__()
        self.hp += 10
        self.attack += 5

Mario = Hero()
gomba = Defender()
print('Gomba hp:')
print(gomba.hp)
print('Mario hp:')
print(Mario.hp)
Mario.fight(gomba)
Mario.fight(gomba)
Mario.fight(gomba)
print('Gomba hp after war:')
print(gomba.hp)
print('Mario hp after war:')
print(Mario.hp)
