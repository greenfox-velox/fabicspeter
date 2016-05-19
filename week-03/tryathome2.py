def beef():
    print("Ez egesz fasza")
beef()
beef()

def btc_to_usd(btc):
    usd = btc * 527
    print(usd)

btc_to_usd(4)


class Enemy:
    life = 3

    def attack(self):
        print('ouch')
        self.life -= 1

    def checklife(self):
        if self.life <= 0:
            print("I am died")
        else:
            print(str(self.life) + "life left")

enemy1 = Enemy()
enemy2 = Enemy()
enemy1.attack()
enemy1.attack()
enemy1.attack()
enemy1.checklife()
enemy2.checklife()
