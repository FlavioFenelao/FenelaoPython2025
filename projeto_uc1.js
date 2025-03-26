import entradaDados from 'readline-sync';

// Classe Aluno
class Aluno { // A classe Aluno é criada para representar cada aluno dentro do sistema
    constructor() { // método construtor, para iniciar a função
        this.nomeAluno = entradaDados.question("\nDigite o nome do(a) Aluno(a): "); // Solicita que o usuário digite o nome do ALuno
        this.matriculaAluno = this.gerarMatricula(); // Chama o método para gerar matrícula automaticamente
        this.notaAluno = []; // Esta linha inicializa a propriedade notaAluno como um array vazio. Esse array será usado para armazenar referências a notas do alunos
        this.disciplinasMatriculadas = []; // Inicializa a propriedade disciplinasMatriculadas como um array vazio. Este array armazenará as disciplinas em que o aluno está matriculado
    }

    adicionarNota(nota) { // Este é um método que permite adicionar uma nota ao array notaAluno
        this.notaAluno.push(nota); // A nota fornecida como argumento é adicionada ao array notaAluno usando o método push, permitindo que as notas do aluno sejam acumuladas à medida que ele é avaliado nas disciplinas
    }

    calcularMedia() { // Nota Aluno é um Array
        if (this.notaAluno.length === 0) return 0; // Se o total de nota for igual a zero
        const soma = this.notaAluno.reduce((total, nota) => total + nota, 0); // Este é um método de array que executa uma função fornecida em cada elemento do array (da esquerda para a direita) para reduzir o array a um único valor (somando os números)
        // (total, nota): total é o acumulador que armazena o valor total até aquele ponto, e nota é o elemento atual do array que está sendo processado.
        // total + nota: Esta expressão soma o valor acumulado (total) com a nota atual (nota)
        return soma / this.notaAluno.length; // A soma total das notas é dividida pelo número de notas. O resultado dessa divisão é a média das notas
    }

    matricularNaDisciplina(disciplina) { // Método matricularNaDisciplina e a (disciplina é o parâmetro)
        if (!disciplina) { // Se o parâmetro for falso, o código do erro será executado
            console.log("Erro: Disciplina inválida.");
            return; // Essa linha encerra a execução da função, impedindo que o código abaixo dela seja executado
        }
        this.disciplinasMatriculadas.push(disciplina); // Se a disciplina é válida, esta linha adiciona a disciplina ao array disciplinasMatriculadas do aluno (representado por this). Isso significa que o aluno agora está matriculado nessa disciplina
        disciplina.matricularAluno(this); // Esta linha chama o método matricularAluno do objeto disciplina, passando o próprio aluno como argumento (this). Essa ação normalmente indica que a disciplina também está atualizando seu registro para incluir o novo aluno matriculado
    }

    gerarMatricula() {
        const anoAtual = new Date().getFullYear(); // Obtém o ano atual
        const digitosAleatorios = Math.floor(100 + Math.random() * 900); // Gera um número aleatório entre 100 e 999
        return `${anoAtual}${digitosAleatorios}`; // Retorna a matrícula no formato "AAAAAAA"
    }

    gerarBoleto() { // Método gerarBoleto
        const valorMensalidade = 500.00; // Constante com o valor fixo da mensalidade
        const dataVencimento = "10/04/2024"; // Constante com Data fixada
        console.log(`\n💰 BOLETO GERADO PARA ${this.nomeAluno}`); // Mensagem na saída do console indicando que um boleto foi gerado para um aluno específico. A propriedade nomeAluno busca o Dado Armazenado com o nome estudante na Função Aluno
        console.log(`Valor: R$${valorMensalidade.toFixed(2)}`); // Valor da mensalidade é impresso no console, formatado para dois dígitos decimais, usando o método toFixed(2)
        console.log(`Vencimento: ${dataVencimento}`); //Esta linha imprime a data de vencimento do boleto na Constante DataVencimento.
        console.log("Código de barras: 1234.5678.9101.1121\n"); // Simulando o código de Barras
    }
}


    gerarBoletim() { // O método gerarBoletim pertence à classe Disciplina e tem a função de gerar um boletim que lista os alunos matriculados na disciplina, juntamente com suas médias
        if (this.alunosMatriculados.length === 0) { // Esta linha verifica se a propriedade alunosMatriculados, que é um array contendo os alunos matriculados na disciplina. Se o comprimento do array for 0, significa que não há alunos matriculados
            console.log(`Nenhum aluno matriculado na disciplina ${this.nomeDisciplina}.`);
            return; // Return encerra a execução do método
        }

        console.log(`📜 Boletim da disciplina: ${this.nomeDisciplina}`); // Se houver alunos matriculados, a Mensagem é impressa
        this.alunosMatriculados.forEach((aluno, index) => { // A função forEach é usada para iterar sobre cada aluno no array alunosMatriculados. Para cada iteração, o aluno atual e seu index (posição no array) são passados para a função de callback
            console.log(`${index + 1}. ${aluno.nomeAluno} - Média: ${aluno.calcularMedia().toFixed(2)}`); // Dentro do loop, uma linha é impressa no console para cada aluno, mostrando sua posição na lista (com index + 1 para que a contagem comece em 1), o nome do aluno e sua média. A média é calculada pelo método calcularMedia() do objeto aluno e formatada com duas casas decimais usando toFixed(2)
        });
    }
}


  

    

  
 

        
      
    
            
         
   
