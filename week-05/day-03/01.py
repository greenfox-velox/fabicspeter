def ten_diviner(x):
    while True:
        try:
            x = int(input('Whtas your hoss?\n'))
            print (10.0 / x)
            break
        except NameError:
            print ("Fail, its character. print a number pls")
        except ZeroDivisionError:
            print ('Hey only chuck norris can divine by 0 choose another')
        except ValueError:
            print('Its a string please insert a number')

ten_diviner(5)
