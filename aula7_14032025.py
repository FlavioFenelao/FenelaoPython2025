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

# 4. Números Pares com FOR:
# Peça ao usuário um número e mostre todos os números pares de 1 até ele.
numero = int(input("Insira um número: "))
print(f"Números pares de 1 até {numero}:")
for i in range(1, numero + 1):   
    if i % 2 == 0:  # Verificar se o número é par 
        print(i)
