#OOP
class PlayerCharacter:
    def __init__(self,name,roll_number,age):
        self.name = name
        self.roll_number = roll_number
        self.age = age


    def run(self):
        print('run')
        return 'done'

player1 = PlayerCharacter('NAMAN SHARMA','20SCSE1180020',19)
player2 = PlayerCharacter('ANKIT GUPTA','20SCSE1181003',21)

print(player1.name)
print(player1.roll_number)
print(player1.age)
print(player2.name)
print(player2.roll_number)
print(player2.age)
print(player2.run())















