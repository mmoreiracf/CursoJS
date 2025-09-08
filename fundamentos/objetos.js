// Associa-se o objeto ao mundo real

// Exemplo: carro
// Possui caracteristicas e acoes

// Um objeto é composto por duas partes principais:

// Propriedades (As Características): São os dados do objeto. Elas funcionam em pares de chave-valor.

// chave: o nome da característica (ex: "marca").

// valor: o valor da característica (ex: "Fiat").

// Métodos (As Ações): São as funcionalidades do objeto. Um método é simplesmente uma propriedade cujo valor é uma função.

const carro = {
  // --- PROPRIEDADES (Características) ---
  marca: "Honda",
  modelo: "Civic",
  ano: 2023,
  cor: "Preto",
  ligado: false, // Uma propriedade para guardar o estado do carro

  // --- MÉTODOS (Ações) ---
  ligar: function() {
    this.ligado = true; // 'this' se refere ao próprio objeto 'carro'
    console.log("O carro está ligado!");
  },

  desligar: function() {
    this.ligado = false;
    console.log("O carro foi desligado.");
  },

  obterDetalhes: function() {
    // Um método que usa as propriedades do objeto
    return `Carro: ${this.marca} ${this.modelo}, Ano: ${this.ano}, Cor: ${this.cor}`;
  }
};

// Neste exemplo, marca, modelo, ano, cor e ligado são propriedades. As funções ligar, desligar e obterDetalhes são métodos. Tudo isso está organizado dentro da única variável carro.