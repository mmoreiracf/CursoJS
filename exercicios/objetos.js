// Exercício 1: O Básico (Criar, Acessar e Modificar)
// Objetivo: Praticar a criação de um objeto literal e a manipulação de suas propriedades.

// Cenário: Vamos criar um objeto para representar um Livro.

const livro = {
  titulo: "A Arte da Guerra",
  autor: "Sun Tzu",
  anoPublicacao: -500,
  genero: "Estratégia Militar",
  disponivel: true,

  //--------------------// Modificando a disponibilidade do livro //--------------------//
  alugar: function() {
    let alugar = prompt("Digite se deseja alugar (s) para sim e (n) para não:");
      if (alugar === "s") {
          this.disponivel = false;
          console.log("O livro foi alugado.");
      }
      else {
          console.log("O livro não foi alugado.");
      }  
  },

  mudarGenero: function() {
    let genero = prompt("Forneça o genero:");
      if (genero === "") {
          this.genero= genero;
          console.log("O genero foi alterado");
      }
      else {
          console.log("O genero não foi alterado");
      }  
    }
}; 


console.log(livro.titulo);
console.log(livro.autor);
console.log(livro);

livro.alugar()
livro.mudarGenero()



// O que você precisa fazer:
// Crie um objeto chamado livro.

// Adicione as seguintes propriedades a este objeto:

// titulo (string): "A Arte da Guerra"

// autor (string): "Sun Tzu"

// anoPublicacao (number): -500 (representando 500 a.C.)

// genero (string): "Estratégia Militar"

// No console, exiba o titulo e o autor do livro.

// Mude o valor da propriedade genero para "Estratégia e Filosofia".

// Adicione uma nova propriedade chamada disponivel com o valor booleano true.

// Exiba o objeto livro completo no console para ver o resultado final.

// Exercício 2: Adicionando Comportamento (Métodos)
// Objetivo: Adicionar funções (métodos) a um objeto para que ele possa executar ações.

// Cenário: Vamos criar um objeto Retangulo.

// O que você precisa fazer:
// Crie um objeto chamado retangulo.

retangulo = {
  largura: 10,
  altura: 5,

  calcularArea: function() {
    return this.largura * this.altura;
  },

  calcularPerimetro: function() {
    return 2 * (this.largura + this.altura);
  },

  exibirdetalhes: function() {
      return `Retângulo com ${this.largura}cm de largura e ${this.altura}cm de altura. Área: ${this.calcularArea()}cm², Perímetro: ${this.calcularPerimetro()}cm.`;
  }
};

console.log("Área do retângulo: " + retangulo.calcularArea() + "cm²");
console.log("Perímetro do retângulo: " + retangulo.calcularPerimetro() + "cm");
console.log(retangulo.exibirdetalhes());

console.log("--------------------// Exercício 2 //--------------------//");

// Adicione as seguintes propriedades:

// Adicione as propriedades largura (number) com o valor 10 e altura (number) com o valor 5.

// Crie um método chamado calcularArea. Este método não recebe parâmetros e deve retornar a área do retângulo (largura * altura). Use a palavra-chave this para acessar as propriedades do próprio objeto.

// Crie um método chamado calcularPerimetro, que retorna o perímetro do retângulo (2 * (largura + altura)). Use this aqui também.

// Chame os dois métodos e exiba os resultados no console.

// ⭐ Desafio: Crie um método exibirDetalhes() que exibe uma string formatada como: "Retângulo com 10cm de largura e 5cm de altura. Área: 50cm², Perímetro: 30cm."

// Exercício 3: Estruturas Complexas (Objetos Aninhados e Arrays)
// Objetivo: Trabalhar com objetos que contêm outros objetos e arrays, uma estrutura muito comum em dados de APIs (JSON).

// Cenário: Vamos modelar um Desenvolvedor.

// O que você precisa fazer:
// Crie um objeto chamado desenvolvedor.

// Adicione as seguintes propriedades:

// nome (string): "Mariana"

// idade (number): 28

// linguagens (array de strings): ["JavaScript", "Python", "SQL"]

// frameworks (array de strings): ["React", "Node.js", "Django"]

// empresa (objeto): um objeto com as propriedades nomeEmpresa ("Tech Solutions") e setor ("Desenvolvimento Web").

// Acesse e exiba no console:

// A segunda linguagem de programação do desenvolvedor.

// O nome da empresa onde o desenvolvedor trabalha.

// Adicione um novo framework, "React Native", ao final do array frameworks.

// Altere o setor da empresa para "Desenvolvimento Mobile".

// Exiba o objeto desenvolvedor completo no final.

desenvolvedor = {
  nome: "Mariana",
  idade: 28,
  linguagens: ["JavaScript", "Python", "SQL"],
  frameworks: ["React", "Node.js", "Django"],
  empresa: {
    nomeEmpresa: "Tech Solutions",
    setor: "Desenvolvimento Web"
  }  
};
console.log(desenvolvedor.linguagens[1]);
console.log(desenvolvedor.empresa.nomeEmpresa);
desenvolvedor.frameworks.push("React Native");
desenvolvedor.empresa.setor = "Desenvolvimento Mobile";
console.log(desenvolvedor);


// Exercício 4: Manipulando Listas de Objetos
// Objetivo: Praticar a iteração e manipulação de um array de objetos, usando métodos como .map() e .filter().

// Cenário: Você tem uma lista de Produtos de uma loja virtual.

// O que você precisa fazer:
// Crie um array chamado produtos contendo três objetos. Cada objeto deve ter as propriedades id (number), nome (string), preco (number) e categoria (string).

// Filtrar: Crie um novo array chamado produtosDeTecnologia que contém apenas os produtos da categoria "Tecnologia".

// Mapear: Crie um novo array chamado nomesDosProdutos que contém apenas os nomes de todos os produtos.

// Filtrar e Mapear: Crie um novo array que contenha apenas os nomes dos produtos com preço abaixo de R$ 50.
console.log("-------------------------------exercicio 4-----------------------------");
console.log("");

produtos = [
  {id: 1, nome: "Smartphone", preco: 1500, categoria: "Tecnologia"},
  {id: 2, nome: "Caderno", preco: 20, categoria: "Papelaria"},
  {id: 3, nome: "Fone de Ouvido", preco: 200, categoria: "Tecnologia"}
];

const produtosDeTecnologia = produtos.filter(produto => produto.categoria === "Tecnologia");
const nomesDosProdutos = produtos.map(produto => produto.nome);
const nomesProdutosAbaixo50 = produtos.filter(produto => produto.preco < 50).map(produto => produto.nome);

console.log(produtosDeTecnologia);
console.log(nomesDosProdutos);
console.log(`produtos abaixo de R$50,00 : ${nomesProdutosAbaixo50}`);




// Exercício 1: Calcular o quadrado dos números

// Dada uma lista de números, crie uma nova lista com o quadrado de cada número.



// numeros = [1, 2, 3, 4, 5]

// Exercício 2: Filtrar palavras que começam com "A"

// Dada uma lista de palavras, crie uma nova lista contendo apenas as palavras que começam com a letra "A" (maiúscula ou minúscula).


// frutas = ["Maçã", "Banana", "Abacaxi", "Laranja", "Amora"]


// Exercício 3: Criar frases a partir de objetos

// Você tem uma lista de objetos representando produtos. Use `map` para criar uma nova lista de strings no formato: "O produto [nome] custa R$ [preco]".

// produtos = [
//     {'nome': 'Notebook', 'preco': 2500},
//     {'nome': 'Mouse', 'preco': 80},
//     {'nome': 'Teclado', 'preco': 150}
// ]

// Exercício 4: Filtrar produtos em estoque

// A partir de uma lista de produtos, use `filter` para criar uma nova lista contendo apenas os produtos que têm quantidade em estoque maior que zero.


// estoque = [
//     {'produto': 'Caneta', 'quantidade': 15},
//     {'produto': 'Lápis', 'quantidade': 0},
//     {'produto': 'Borracha', 'quantidade': 5},
//     {'produto': 'Régua', 'quantidade': 0}
// ]

// Desafio (Combinando `map` e `filter`)

// Desafio 1: Preços dos produtos caros

// Você tem uma lista de produtos. Crie uma nova lista contendo **apenas os preços** dos produtos que custam mais de R$ 100.


// produtos = [
//     {'nome': 'Notebook', 'preco': 2500},
//     {'nome': 'Mouse', 'preco': 80},
//     {'nome': 'Teclado', 'preco': 150},
//     {'nome': 'Monitor', 'preco': 950},
//     {'nome': 'Webcam', 'preco': 95}
// ]

// Desafio 2: IDs de usuários ativos

// Dada uma lista de usuários, crie uma nova lista contendo **apenas os IDs** dos usuários que estão ativos.


// usuarios = [
//     {'id': 1, 'nome': 'Carlos', 'ativo': True},
//     {'id': 2, 'nome': 'Juliana', 'ativo': False},
//     {'id': 3, 'nome': 'Ricardo', 'ativo': True},
//     {'id': 4, 'nome': 'Leticia', 'ativo': False}
// ]
