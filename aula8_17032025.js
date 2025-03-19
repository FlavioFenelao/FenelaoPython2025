

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
        console.log("A média do aluno é: ", calcularNota);
        rl.close();
             });
            });
    })
})
     





//Soma dos Números Pares em um Intervalo: Peça ao usuário dois números, representando o início e o fim de um intervalo. Use um loop (for ou while) para calcular a soma de todos os números pares nesse intervalo e exiba o resultado.
let inicio = parseInt(prompt("Digite o número inicial do intervalo:"));
let fim = parseInt(prompt("Digite o número final do intervalo:"));

if (isNaN(inicio) || isNaN(fim)) {
    console.log("Por favor, insira números válidos.");
} else {
    let somaPares = 0;

    for (let i = inicio; i <= fim; i++) {
        if (i % 2 === 0) {
            somaPares += i; 
        }
    }
    console.log(`A soma dos números pares no intervalo de ${inicio} a ${fim} é: ${somaPares}`);
}

//Verificação de Palíndromo: Peça ao usuário uma palavra ou frase. Verifique se a entrada é um palíndromo (ou seja, se pode ser lida da mesma forma de trás para frente, ignorando espaços e maiúsculas/minúsculas). Exiba "É palíndromo" ou "Não é palíndromo".

//Cálculo de Juros Simples: Peça ao usuário o valor principal (P), a taxa de juros anual (r) e o tempo em anos (t). Calcule o montante final usando a fórmula de juros simples M=P×(1+r×t) e exiba o resultado.
function solicitarDados() {
    let principal = parseFloat(prompt("Digite o valor principal (P):"));
    let taxaAnual = parseFloat(prompt("Digite a taxa de juros anual (r) em decimal (ex: 0.05 para 5%):"));
    let tempoAnos = parseFloat(prompt("Digite o tempo em anos (t):"));

    // Valida se os valores são números válidos
    if (isNaN(principal) || isNaN(taxaAnual) || isNaN(tempoAnos)) {
        console.log("Por favor, insira valores válidos.");
        return null;
    }
    return { principal, taxaAnual, tempoAnos };
}

// Função para calcular o montante final
function calcularMontante(principal, taxaAnual, tempoAnos) {
    return principal * (1 + taxaAnual * tempoAnos);
}

// Função para exibir o resultado
function exibirResultado(montante) {
    console.log(`O montante final é: R$ ${montante.toFixed(2)}`);
}

// Função principal
function main() {
    const dados = solicitarDados(); // Solicita os dados

    if (dados) { // Se os dados forem válidos
        const { principal, taxaAnual, tempoAnos } = dados;
        const montante = calcularMontante(principal, taxaAnual, tempoAnos); // Calcula o montante
        exibirResultado(montante); // Exibe o resultado
    }
}

// Executa o programa
main();
//Contagem de Dígitos: Peça ao usuário um número inteiro positivo. Conte quantos dígitos esse número possui e exiba o resultado.
function solicitarNumero() {
    let numero = parseInt(prompt("Digite um número inteiro positivo:"));

    // Valida se o número é válido e positivo
    if (isNaN(numero) || numero < 0) {
        console.log("Por favor, insira um número inteiro positivo válido.");
        return null;
    }
    return numero;
}

// Função para contar os dígitos
function contarDigitos(numero) {
    // Converte o número para string e conta os caracteres
    return numero.toString().length;
}

// Função para exibir o resultado
function exibirResultado(numero, quantidadeDigitos) {
    console.log(`O número ${numero} possui ${quantidadeDigitos} dígito(s).`);
}

// Função principal
function main() {
    const numero = solicitarNumero(); // Solicita o número

    if (numero !== null) { // Se o número for válido
        const quantidadeDigitos = contarDigitos(numero); // Conta os dígitos
        exibirResultado(numero, quantidadeDigitos); // Exibe o resultado
    }
}

// Executa o programa
main();
