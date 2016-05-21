def szoveg(x):
    n = []
    for i in range(len(x)):
        for j in range(i + 3, len(x)):
            # if x[i: j] == [i: j]:
            print (x[i: j + 1])
            print(str(i) + "-" + str(j))
            print(list(range(j - 1, i - 1, -1)))
            print(x)
            print(x[j-1: i-1: -1])


szoveg('Csupa szar szoveget irtam gorog')
