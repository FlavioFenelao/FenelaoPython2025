preco = 150
desconto = 20
preco_desconto = preco - desconto 
print(preco_desconto)

peso = 70
altura = 1.75
imc = peso /(altura **2)
print(imc)

idade = 22
tempo_experiencia = True

Elegível = idade >= 18 and tempo_experiencia
print("Elegível")

nivel_acesso = int(input("Digite o seu nível de acesso: "))

if nivel_acesso == 3:
    print("Acesso total")
elif nivel_acesso == 2:
    print("Acesso parcial")
elif nivel_acesso == 1:
    print("Acesso restrito")
else:
    print("Digite o código válido!!!")


celsius = int(input("Digite uma temperatura: "))
fahrenheit = (celsius * 9/5) + 32
print(fahrenheit)

valor = int(input("Digite um valor: "))
if valor %2 == 0:
    print("O número é par")
else:
    print("O número é ímpar")
print("valor")

'''7. Cálculo de Frete com Base no Peso
Declare uma variável peso com o peso de um pacote em kg. Calcule o frete com base nas seguintes regras:

- Peso até 5 kg: R$ 10.00;
- Peso entre 5 kg e 10 kg: R$ 20.00;
= Peso acima de 10 kg: R$ 30.00;

Imprima o valor do frete.'''

#Resolução:
peso = 8
if peso <= 5:
    frete = 10.0
elif peso <= 10:
    frete = 20.0
else:
    frete = 30.0
print("Valor do frete:", frete)
