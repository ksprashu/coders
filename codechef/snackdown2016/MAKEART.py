import sys

def exec_test (count, N):
    seq = 0
    for i in range(0, count - 2):
        if N[i] == N[i+1] and N[i] == N[i+2]:
            print "Yes"
            return
    
    print "No"
    return

lines = 0
T = 0
count = 0

for line in sys.stdin:
    if lines == 0:
        T = line.strip("\n")
    else:
        if lines % 2 == 1:
            count = int(line.strip("\n"))
        else:
            N = [int(x) for x in line.strip("\n").split(" ")]
            exec_test(count, N)            

    lines += 1
