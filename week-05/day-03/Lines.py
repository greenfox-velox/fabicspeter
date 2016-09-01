# write a function that takes a filename and returns the number of lines the
# file consists. It should return zero if the file not exists.

def readline(file_name):
    f = open(file_name)
    result = f.readlines()
    return len(result)
try:
    print (readline("duplicated_chars.txt"))
except FileNotFoundError:
    print (0)
