pirates = [
  {'Name': 'Olaf', 'has_wooden_leg': False, 'gold': 12, 'Van_földje': True},
  {'Name': 'Uwe', 'has_wooden_leg': True, 'gold': 9, 'Van_földje': False},
  {'Name': 'Jack', 'has_wooden_leg': True, 'gold': 16, 'Van_földje': False},
  {'Name': 'Morgan', 'has_wooden_leg': False, 'gold': 17, 'Van_földje': True},
  {'Name': 'Hook', 'has_wooden_leg': True, 'gold': 20, 'Van_földje': True},
]

# Write a function that takes any list that contains pirates as in the example,
# And returns a list of names containing the pirates that has wooden leg and
# more than 15 gold

def pirate(lista):
    pirate_names = []
    for i in lista:
        if i['Van_földje'] and i['gold'] > 15:
            pirate_names.append(i['Name'])
    return pirate_names


print(pirate(pirates))
