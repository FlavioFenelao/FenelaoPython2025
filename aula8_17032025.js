

//Cálculo de Média de Notas: Peça ao usuário que insira 4 notas (de 0 a 10). 
//Calcule a média das notas e exiba o resultado. Se a média for maior ou igual a 7, exiba "Aprovado". 
//Caso contrário, exiba "Reprovado".
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularNota(n1, n2, n3, n4){
    let media = (n1 + n2 + n3 + n4) / 4;

    if (media  >= 7) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}
rl.question("Digite nota 1: ", (nota1)=> {
    rl.question("Digite nota 2:", (nota2) => {
         rl.question("Digite nota 3: ", (nota3) => {
             rl.question("Digite nota 4: ", (nota4) => {
        nota1 = parseFloat(nota1);
        nota2 = parsefloat(nota2);
        nota3 = parsefloat(nota3);
        nota4 = parsefloat(nota4);

        let media = (nota1 + nota2 + nota3 + nota4) / 4;
        console.log("A média do aluno é: ", media);
        rl.close();
             });
            });
    })
})
     





Soma dos Números Pares em um Intervalo: Peça ao usuário dois números, representando o início e o fim de um intervalo. Use um loop (for ou while) para calcular a soma de todos os números pares nesse intervalo e exiba o resultado.

Verificação de Palíndromo: Peça ao usuário uma palavra ou frase. Verifique se a entrada é um palíndromo (ou seja, se pode ser lida da mesma forma de trás para frente, ignorando espaços e maiúsculas/minúsculas). Exiba "É palíndromo" ou "Não é palíndromo".

Cálculo de Juros Simples: Peça ao usuário o valor principal (P), a taxa de juros anual (r) e o tempo em anos (t). Calcule o montante final usando a fórmula de juros simples M=P×(1+r×t) e exiba o resultado.

Contagem de Dígitos: Peça ao usuário um número inteiro positivo. Conte quantos dígitos esse número possui e exiba o resultado.