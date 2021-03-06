# 1. Create a method that reads all contents of a file when its 
# name given as param
def readfile(file_name):
    f = open(file_name)
    result = f.read()
    f.close()
    return result

# 2. Create a method that gets a file_name and a number as param
# and reads the numberth line of the file
def readline(file_name, number):
    f = open(file_name)
    for i in range (number):
        result = f.readline()
    f.close()
    return result.rstrip()


# 3. Create a method that gets a long sentence as param and gives
# back the contained words in a list
def words(sentence):
    f = []
    l = 'this is a short sentence'
    sentence = sentence[:-1]
    f = sentence.split()
    return f

# 4. Create a method that gets a list of words and creates a sentence
# with the words separated by spaces
def sentence(words):
    f = ''
    for i in words[:-1]:
        f += i + ' '
    f += 'sentence' + '.'
    return f


# 5. Create a method that gets a string and gives back the character
# codes in a list
def char_codes(string):
    f = []
    for i in string:
        f += [ord(i)]
    return f

# 6. Create a method that gets a list of integers and gives back a
# string which characters are created from the numbers used as
# character codes
def string(char_codes):
    f = ''
    for i in char_codes:
        f += chr(i)
    return f
    pass
