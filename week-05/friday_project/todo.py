import sys
import os
def menu():
    return ('Python Todo application\n'
    '=======================\n'

    'Command line arguments:\n'
     '-l   Lists all the tasks\n'
     '-a   Adds a new task\n'
     '-r   Removes an task\n'
     '-c   Completes an task')

def choose_one(openfile):
    f = open ('todo.txt')
    n = 0
    if os.stat('todo.txt').st_size == 0:
        print ('No todos for today! :)')
    else:
        for line in f:
            line = line.replace('\n', "")
            n += 1
            print(str(n) + ' - ' + line)
    return

def choose_a():
    f = open ('todo.txt', 'a')
    if len(sys.argv) == 3:
        f.write(sys.argv[2] + '\n')
        f.close()
    else:
        raise ValueError('Unable to add: No task is provided')

def remove_item():
    f = open('todo.txt')
    text = f.readlines()
    del(text[int(sys.argv[2])-1])
    f.close()
    f = open('todo.txt', 'w')
    for i in text:
        f.write(i)
    f.close()

if len(sys.argv) == 1:
    print(menu())
if len(sys.argv) == 2:
    if sys.argv[1] == '-l':
        (choose_one('todo.txt'))
if sys.argv[1] == '-a':
    choose_a()
if sys.argv[1] == '-r':
    remove_item()
