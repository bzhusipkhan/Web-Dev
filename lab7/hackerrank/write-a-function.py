def is_leap(year):
    leap = False
    if leap % 4 !=0 or leap % 100 == 0 or leap % 400 != 0 :
        leap = False 
      
    return leap

year = int(input())
print(is_leap(year))