#OOP
class PlayerCharacter:
    #class object attribute
    membership = True
    def __init__(self,name,roll_number,age):
        if(PlayerCharacter.membership):
            self.name = name #attributes
            self.roll_number = roll_number
            self.age = age


    def run(self):
        print(f'My name is {self.name}')
        return 'done'

player1 = PlayerCharacter('NAMAN SHARMA','20SCSE1180020',19)
player2 = PlayerCharacter('ANKIT GUPTA','20SCSE1181003',21)

print(player1.name)
print(player1.roll_number)
print(player1.age)
print(player2.name)
print(player2.roll_number)
print(player2.age)
print(player1.run())
print(player1)
print(player2)
print(player1.membership)














