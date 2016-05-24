# Create a method that decrypts texts/reversed_zen_lines.txt

def decrypt(file_name):
    f = open(file_name)
    result = ''
    original = f.readlines()

    for i in original:
        i = i.rstrip()
        line = i[:: -1]
        result += line + '\n'

    f.close()
    return result

print (decrypt('texts/reversed_zen_lines.txt'))
