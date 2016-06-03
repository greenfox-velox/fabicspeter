import sys
import os
def menu():
    return ('Python Todo application\n'
    '=======================\n'

    'Command line arguments:\n'
     '-l   Lists all the tasks\n'
     '-a   Adds a new task\n'
     '-r   Removes an task\n'
     '-c   Completes an task\n')

def choose_one():
    f = open ('todo.txt')
    n = 0
    if os.stat('todo.txt').st_size == 0:
        print ('No todos for today! :)')
    else:
        for line in f:
            line = line.replace('\n', "")
            n += 1
            print(str(n) + '- ' + line)
    return

def choose_a():
    f = open ('todo.txt', 'a')
    if len(sys.argv) == 3:
        f.write('[ ]' + sys.argv[2] + '\n')
        f.close()
    else:
        print ('Unable to add: No task is provided')

def remove_item():
    try:
        f = open('todo.txt')
        text = f.readlines()
        if int(sys.argv[2]) <= 0:
            print('There is no Zero or below element to remove')
        else:
            del(text[int(sys.argv[2])-1])
        f.close()
        f = open('todo.txt', 'w')
        for i in text:
            f.write(i)
        f.close()
    except IndexError:
        if len(sys.argv) == 2:
            print ('Unable to remove: Index is out of bound')
        else:
            print('Unable to remove: Index is out ')
    except ValueError:
        print ('Unable to remove: Index is not a number')

def check_item():
        try:
            f = open('todo.txt')
            text = f.readlines()
            text[int(sys.argv[2])-1] = text[int(sys.argv[2])-1].replace('[ ]', '[x]')
            f.close()
            if int(sys.argv[2]) <= 0:
                print('There is no Zero or below element to check')
            else:
                f = open('todo.txt', 'w')
                for i in text:
                    f.write(i)
                f.close()
        except IndexError:
            if len(sys.argv) == 2:
                print('Unable to check: No index is provided')
            else:
                print('Unable to check: Index is out of bound')
        except ValueError:
            print ('Unable to check: Index is not a number')

def main():
        if len(sys.argv) == 1:
            print(menu())
        if len(sys.argv) >= 2:
            if sys.argv[1] == '-l':
                choose_one()
            elif sys.argv[1] == '-a':
                choose_a()
            elif sys.argv[1] == '-r':
                remove_item()
            elif sys.argv[1] == '-c':
                check_item()
            else:
                print('Csacsi öreg medvém. Ezt ne használd!')
                print(menu())
main()
