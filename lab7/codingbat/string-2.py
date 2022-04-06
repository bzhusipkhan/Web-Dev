def double_char(str):
  new_str = ""
  for char in str:
    new_str += char*2
  return new_str

def count_hi(str):
  return str.count("hi")

def cat_dog(str):
  return str.count("cat") == str.count("dog")

def count_code(str):
  count = 0
  i=0
  while "co" in str[i:]:
    if len(str[i+str[i:].index("co"):]) >= 4 and str[i+3+str[i:].index("co")] == "e":
      count += 1
    i += str[i:].index("co")+3
  return count

def end_other(a, b):
  long_s, short_s = (a,b) if len(a) >= len(b) else (b,a)
  return long_s.lower().endswith(short_s.lower())
