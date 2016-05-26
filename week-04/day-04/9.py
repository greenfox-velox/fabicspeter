# 9. Given a string, compute recursively a new string where
#all the adjacent chars are now separated by a "*".

def work(b):
    if '' == b:
        return ''
    elif b[0] == 'x':
        return '*x*' + work(b[1:])
    else:
        return b[0] + work(b[1:])

print (work('xegdasifsmay'))
