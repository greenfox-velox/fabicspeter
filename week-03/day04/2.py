class word:

    def __init__(self, word1):
        self.to_pal = word1

    def create_palindrom(self):
        char_num = len(self.to_pal)
        while char_num > 0:
            char_num  -= 1
            self.to_pal += (self.to_pal[char_num])
        return self.to_pal

palindrom = word(input("Please enter a word, and I'm ponna generate a palindrom: "))

print (palindrom.create_palindrom())
