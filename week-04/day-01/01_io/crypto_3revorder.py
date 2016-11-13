# Create a method that decrypts texts/reversed_zen_order.txt
def decrypt(file_name):
    f = open(file_name)
    result = ''
    original = f.readlines()

    for i in original:
        line = i[:: 1]
        result += line
    f.close()
    return result

print (decrypt('texts/reversed_zen_order.txt'))
