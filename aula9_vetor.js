
// Arrays em JavaScript são estruturas de dados que permitem armazenar MÚLTIPLOS VALORES em uma única variável.

// Exemplo:
let frutas = ["Maçã", "Banana", "Laranja"];
console.log(frutas);

// Funções/comandos de Array:

// push: Adiciona um ou mais elementos ao final do array.

frutas.push("Laranja");
console.log(frutas);

// count: Em JavaScript, não temos uma função count diretamente, mas podemos utilizar o comando length para contar o número de elementos.

console.log(frutas.length);

// copy: Para copiar um array, podemos usar o método slice().

let copiaFrutas = frutas.slice(); 
console.log(copiaFrutas);

// random: Para selecionar um elemento aleatório de um array.

let randomIndex = Math.floor(Math.random() * frutas.length);
console.log(frutas[randomIndex]);

// range: JavaScript não tem uma função range nativa, mas podemos criar uma.

function range(start, end) {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

console.log(range(1, 5));

// asort: Em JavaScript, podemos usar sort() para ordenar arrays.

let num = [3, 1, 4, 1, 5, 9];
num.sort((a, b) => a - b);
console.log(num);

// Demonstração:
let numeros = [5, 3, 8, 1, 9];

// Ordenar o array
numeros.sort((a, b) => a - b);
console.log("Ordenado:", numeros);

// Adicionar um novo número
numeros.push(7);
console.log("Após push:", numeros);

// Selecionar um número aleatório
let randomNum = numeros[Math.floor(Math.random() * numeros.length)];
console.log("Número aleatório:", randomNum);

// Contar o número de elementos
console.log("Número de elementos:", numeros.length);

// Atividades:

// 1: Crie uma função que recebe um array de números e retorna a soma de todos os elementos.
function somaLista(lista) {
    return lista.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
}

const numeros3 = [1, 2, 3, 4, 5];
console.log(somaLista(numeros3));

// acc = inicio
// curr = próximo


// 2: Crie uma função que recebe um array de strings e retorna um
//novo array com as strings em ordem alfabética.
function ordenarLista1(lista1) {
    return lista1.slice().sort();
}

const palavras = ["marrom", "laranja", "azul", "amarelo", "gelo"];
console.log(ordenarLista1(palavras)); 


// 3: Crie uma função que recebe um array e retorna um novo array
 //sem elementos duplicado
 function listaDuplicada(elementosDuplicados) {
    return [...new Set(elementosDuplicados)];
 }
 const elementos = ['laranja', 'laranja', 'azul','azul'];
 console.log(listaDuplicada (elementos));