/* Sistema de Pedidos Online
Modele classes para Produto (nome, preço, estoque)
Cliente (nome, endereço, carrinho) e Pedido (itens, total, status).
Implemente métodos para adicionar ao carrinho, finalizar compra e calcular frete */

class Produto {
    constructor(nome, preco, estoque) {
      this.nome = nome;
      this.preco = preco;
      this.estoque = estoque;
    }
  
    // Método para reduzir o estoque quando o produto for comprado
    diminuirEstoque(quantidade) {
      if (this.estoque >= quantidade) {
        this.estoque -= quantidade;
        return true;
      } else {
        return false; 
      }
    }
  }

  class Cliente {
    constructor(nome, endereco) {
      this.nome = nome;
      this.endereco = endereco;
      this.carrinho = []; 
    }
  
    // Método para adicionar um produto ao carrinho
    adicionarAoCarrinho(produto, quantidade) {
      if (produto.diminuirEstoque(quantidade)) {
        this.carrinho.push({ produto, quantidade });
      } else {
        console.log(`Não há estoque suficiente de ${produto.nome}`);
      }
    }
  
    // Método para visualizar o carrinho
    visualizarCarrinho() {
      return this.carrinho;
    }
  }

  class Pedido {
    constructor(cliente) {
      this.cliente = cliente;
      this.itens = cliente.carrinho; 
      this.total = 0;
      this.status = 'Pendente'; 
    }
  
    // Método para calcular o total do pedido
    calcularTotal() {
      this.total = this.itens.reduce((acc, item) => acc + item.produto.preco * item.quantidade, 0);
      return this.total;
    }
  
    // Método para calcular o frete (simples, com valor fixo)
    calcularFrete() {
      return 10;
    }
  
    // Método para finalizar a compra
    finalizarCompra() {
      const totalComFrete = this.calcularTotal() + this.calcularFrete();
      console.log(`Pedido finalizado. Total: R$ ${totalComFrete.toFixed(2)}. Status: Pago`);
      this.status = 'Pago';
      return totalComFrete;
    }
  }

  // Criando alguns produtos
const produto1 = new Produto("Camiseta", 50, 10);
const produto2 = new Produto("Calça", 120, 5);

// Criando um cliente
const cliente = new Cliente("João", "Rua ABC, 123");

// Adicionando produtos ao carrinho do cliente
cliente.adicionarAoCarrinho(produto1, 2); 
cliente.adicionarAoCarrinho(produto2, 1); 

// Visualizando o carrinho
console.log("Carrinho do cliente:", cliente.visualizarCarrinho());

// Criando um pedido para o cliente
const pedido = new Pedido(cliente);

// Calculando o total do pedido e o frete
pedido.calcularTotal();
pedido.calcularFrete();

// Finalizando a compra
pedido.finalizarCompra();












// criar 3 classes 