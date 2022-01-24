class User():
    def sign_in(self):
        print("logged in")

class Sniper(User):
    def __init__(self,name,range):
        self.name = name
        self.range = range

    def attack(self):
        print(f'Attacking with a range  of {self.range} metres')

class Gunner(User):
    def __init__(self,name,bullets):
        self.name = name
        self.bullets = bullets

    def attack(self):
        print(f'Shotted a lot and left with {self.bullets} bullets')

Sniper1 = Sniper('Naman', 100)
Gunner1 = Gunner('Naman', 125)
Sniper1.attack()
Gunner1.attack()
print(Sniper1.name)
print(Sniper1.range)
print(isinstance(Sniper1,Sniper))
print(isinstance(Gunner1,Sniper))
print(isinstance(Gunner1,Gunner))
print(isinstance(Gunner1,User))#imp Gunner and Sniper are subclass of User
print(isinstance(Sniper1,object))#gives true bcz object is a base class in python 
print(Sniper1.attack()) 