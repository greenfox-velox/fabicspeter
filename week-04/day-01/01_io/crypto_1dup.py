# Create a method that decrypts the texts/duplicated_chars.txt

def decrypt(file_name):
    f = open(file_name)
    text2 = ''

    for line in f:
        for i in range(0, len(line), 2):
            if (i < len(line) - 1):
                text2 += line[i]
        text2 = text2 + '\n'
    f.close()
    return text2

print (decrypt('texts/duplicated_chars.txt'))
