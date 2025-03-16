# 1. Contagem Regressiva com FOR:
# Peça ao usuario um número e faça uma contagem

numero = int(input("Digite um número para a contagem regressiva"))
for i in range(numero, -1, -1):
    print(i)


    # 2. Soma de números com WHILE:
    # Peça ao usuário um número e some
    # Todos os números de 1 até ele 

    numero = int(input("Digite um número para"))
    soma = 0
    i = 1 
    while i <= numero:
        soma += i
        i += 1
    print("Soma:", soma)

    # 3. Tabuada com FOR:
# Peça ao usuário um número e mostre a tabuada dele de 1 a 10.
    numero = int(input("Digite um número para a tabuada"))
    for i in range(1, 11):
        print(f"{numero} x {i} = {numero*i}")

 #  4.Cálculo de Média de Notas: Peça ao usuário que insira 4 notas (de 0 a 10). 
Calcule a média das notas e exiba o resultado. 
Se a média for maior ou igual a 7, exiba "Aprovado". Caso contrário, exiba "Reprovado".
nota1 = float(input("Insira a primeira nota (0 a 10): "))
nota2 = float(input("Insira a segunda nota (0 a 10): "))
nota3 = float(input("Insira a terceira nota (0 a 10): "))
nota4 = float(input("Insira a quarta nota (0 a 10): "))
media = (nota1 + nota2 + nota3 + nota4) / 4
print(f"A média das notas é: {media:.2f}")
if media >= 7: 
    print("Aprovado") 
else:
    print("Reprovado")
