

//1.Soma de Matrizes: Crie duas matrizes 3x3 e escreva uma função para somá-las. 
//A função deve retornar uma nova matriz com o resultado.
// Definir duas matrizes 3x3
let matriz1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  let matriz2 = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1]
  ];
  
  // Função para somar as matrizes
  function somarMatrizes(matrizA, matrizB) {
    let resultado = [];
  
    for (let i = 0; i < matrizA.length; i++) {
      let linha = [];
      for (let j = 0; j < matrizA[i].length; j++) {
        linha.push(matrizA[i][j] + matrizB[i][j]);
      }
      resultado.push(linha);
    }
  
    return resultado;
  }
  
  // Chamar a função e armazenar o resultado
  let resultadoSoma = somarMatrizes(matriz1, matriz2);
  
  // Exibir o resultado
  console.log("Resultado da soma das matrizes:");
  console.log(resultadoSoma);
  
//2.Transposição de Matriz: Escreva uma função que receba uma matriz 3x3 e retorne sua transposta (troque linhas por colunas).
function transporMatriz(matriz) {
    let matrizTransposta = [];
    
    for (let i = 0; i < matriz[0].length; i++) {
      let novaLinha = [];
      for (let j = 0; j < matriz.length; j++) {
        novaLinha.push(matriz[j][i]);
      }
      matrizTransposta.push(novaLinha);
    }
  
    return matrizTransposta;
  }
  
  // Exemplo de uso
  const matriz3x3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  const matrizTransposta = transporMatriz(matriz3x3);
  console.log(matrizTransposta);
  
//3.Multiplicação de Matrizes: Crie duas matrizes 2x2 e escreva uma função para multiplicá-las.
// Função para multiplicar duas matrizes 2x2
function multiplicarMatrizes(matrizA, matrizB) {
    // Inicializando a matriz resultado com 2x2, preenchida com 0s
    let resultado = [
      [0, 0],
      [0, 0]
    ];
  
    // Multiplicando as matrizes
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 2; j++) {
        for (let k = 0; k < 2; k++) {
          resultado[i][j] += matrizA[i][k] * matrizB[k][j];
        }
      }
    }
  
    return resultado;
  }
  
  // Definindo duas matrizes 2x2
  let matrizA = [
    [1, 2],
    [3, 4]
  ];
  
  let matrizB = [
    [5, 6],
    [7, 8]
  ];
  
  // Chamando a função de multiplicação
  let resultado = multiplicarMatrizes(matrizA, matrizB);
  
  // Exibindo o resultado
  console.log("Resultado da multiplicação das matrizes:");
  console.log(resultado);
  
//4.Jogo da Velha: Implemente um jogo da velha usando uma matriz 3x3.
// O programa deve permitir que dois jogadores façam jogadas alternadas e verifique se há um vencedor.

//5.Busca em Matriz: Escreva uma função que receba uma matriz e um número, e retorne a posição (linha e coluna) desse número na matriz. Se o número não estiver na matriz, retorne null.

function buscarNaMatriz(matriz, numero) {
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      if (matriz[i][j] === numero) {
        return { linha: i, coluna: j };
      }
    }
  }
  return null;
}
const matriz3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const numero1 = 5;
const numero2 = 10;

console.log(buscarNaMatriz(matriz3, numero1)); 
console.log(buscarNaMatriz(matriz3, numero2)); 


//6.Matriz Identidade: Crie uma função que gere uma matriz identidade de tamanho NxN (uma matriz onde os elementos da diagonal principal são 1 e os demais são 0).

//7.Rotação de Matriz: Escreva uma função que rotacione uma matriz 3x3 em 90 graus no sentido horário.

//8.Soma das Bordas: Escreva uma função que calcule a soma dos elementos das bordas de uma matriz NxN.
function somaDasBordas(matriz) {
  const n = matriz.length;
  let soma = 0;
  for (let i = 0; i < n; i++) {
    soma += matriz[0][i]; 
    soma += matriz[n-1][i]; 
    for (let i = 1; i < n - 1; i++) {
      soma += matriz[i][0]; 
      soma += matriz[i][n-1]; 
    }
  
    return soma;
  }
}
const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(somaDasBordas(matriz));