'''import numpy as np
def pickingNumber(a):
    max = 0
    frecuencias = [0,0,0,0,0,0,0,0]
    #frecuencias = np.zeros(100)

    for i in a:
        print(i)
        fr = list(filter(lambda numero: numero == i, a))
        frecuencias[i]=len(fr)
        print(fr)
    
    for i in range(0,len(frecuencias)):
        print(frecuencias[i+1])
'''
from collections import defaultdict

def pickingNumber(a):
    maximo = 0
    diccionario = defaultdict(int)

    for val in a:
        diccionario[val] +=1
        maximo = max(maximo,diccionario[val] + diccionario[val+1], diccionario[val] + diccionario[val-1])

    print(diccionario[99])
    return maximo

pickingNumber([2,2,3,3,4,6])
