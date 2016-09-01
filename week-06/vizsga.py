# Create a function that takes a list as a parameter,
# and returns a new list with all it's element value doubled.
# It should raise an error if the parameter is not a list

def double_each_in_list(raw_list):
    if type(raw_list) != list:
        raise ValueError('Except a list')
    double_list = []
    for value in raw_list:
        double_list.append(value * 2)
    return double_list

# Create a function that takes a filename as string parameter,
# and counts the occurances of the letter "a", and returns it as a number.
# It should not break if the file not exists just return 0

def count_a_in_file_content(filename):
    try:
        file = open (filename)
        content = file.read()
        file.close()
        count = 0
        for char in content:
            if char in content:
                count += 1
        return count
    
