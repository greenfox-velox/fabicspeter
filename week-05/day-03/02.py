# write a function that takes a filename and returns the number of lines the
# file consists. It should return zero if the file not exists.

def lines_in_file(file_name):
    try:
        f = open(file_name)
        count = 0
        for line in f:
            count += 1
        return count
    except FileNotFoundError:
        return 0

print (lines_in_file('duplicaed_chars.txt'))
