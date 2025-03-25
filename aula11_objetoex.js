/* Sistema de Pedidos Online
Modele classes para Produto (nome, preço, estoque)
Cliente (nome, endereço, carrinho) e Pedido (itens, total, status).
Implemente métodos para adicionar ao carrinho, finalizar compra e calcular frete */

class Produto {
    constructor(nome, preco, estoque) {
        this.nome = nome,
        this.preco = preco,
        this.estoque = estoque; 
    }
 }

class Cliente {
    constructor(nome1, endereco, carrinho) {
        this.nome1 = nome1,
        this.endereco = endereco 
        this.carrinho = carrinho
    }
   }

class Pedido {
    constructor(itens, total, status) {
        this.itens = itens,
        this.total = total, 
        this.status = status;
    }
}

adicionarCarrinho(lista) {
    if (lista > this.estoque) {
        console.log(`Produto inexistente em estoque.`);
        return false
    }
}










// criar 3 classes 