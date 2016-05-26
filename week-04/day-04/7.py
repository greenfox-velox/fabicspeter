# 7. Given a string, compute recursively (no loops) a new string where all the
# lowercase 'x' chars have been changed to 'y' chars.

def work(b):
    if '' == b:
        return ''
    elif b[0] == 'x':
        return 'y' + work(b[1:])
    else:
        return b[0] + work(b[1:])

print (work('xegdasifsmay'))
