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
    f.write(sys.argv[2] + '\n')
    f.close()




if len(sys.argv) == 1:
    print(menu())
if len(sys.argv) == 2:
    if sys.argv[1] == '-l':
        (choose_one('todo.txt'))
if sys.argv[1] == '-a':
    choose_a()
