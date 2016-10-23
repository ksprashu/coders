import sys

lines = 0
tc = 0
AA = []
N = 0
A = []
B = []

for line in sys.stdin:
    if lines == 0:
        tc = line

    if lines % 3 == 1:
        N = int(line)

    elif lines % 3 == 2:
        A = [int(a) for a in line.strip("\n").split(" ")]
        for n in range(0, N):
            if n == 0:
                AA.append(A[n])
            else:
                AA.append(A[n] - A[n-1])

    elif lines > 0 & lines % 3 == 0:
        B = [int(b) for b in line.strip("\n").split(" ")]
        count = 0
        for n in range(0, N):
            if B[n] <= AA[n]:
                count += 1

        print count

    lines += 1
