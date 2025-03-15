// Contagem regressiva com FOR
// Peça ao usuario um número e faça uma contagem

let numero1 = parseInt(prompt("Digite um número para a contagem regressiva"));
for (let i = numero1; i >= 0; i--) {
    console.log(i);
}

// ´Peça ao usuario um número e some todos os numeros

let numero2 = parseInt(prompt("Digite um número para somar os numeros"));
let soma = 0;
let indice = 1;
while (indice <= numero2) {
    soma += indice;
    indice++;
}
console.log("soma:", soma);

// Tabuada com FOR:
// Peça ao usuario um número e mostre a tabuada

let numero3 = prompt("Digite um número para ver a sua tabuada:");
let numeroint = parseInt(numero3)
for (let i = 1; i <= 10; i++) {
    console.log(`${numeroint} x ${i} = ${numeroint * i}`);
}



