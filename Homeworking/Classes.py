def ten_diviner(x):
    while True:
        try:
            x = int(input('Whtas your hoss?\n'))
            print (10 / x)
            break
        except NameError:
            print ("Fail, its character. print a number pls")
        except ZeroDivisionError:
            print ('Hey only chuck norris can divine by 0 choose another')
ten_diviner(5)
