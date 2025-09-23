// Desestruturação de Objetos
// Funciona pegando propriedades de um objeto e atribuindo-as a variáveis com o mesmo nome.
const usuario = {
  id: 42,
  nome: "João",
  idade: 34,
  email: "joao@exemplo.com"
};

// const nome = usuario.nome;
// const idade = usuario.idade;

// console.log(usuario.nome)
// console.log(usuario.idade)

// const {macarrao, idade} = usuario;

// console.log(macarrao)
// console.log(idade)

// Desestruturação de Arrays
// a atribuição é feita pela posição no array

const coordenadas = [10, 20, 30];
const [x, y] = coordenadas; 

// console.log(x); // Saída: 10
// console.log(y); // Saída: 20

console.log(coordenadas[0])
console.log(coordenadas[2])

// Para pular um elemento, basta deixar um espaço vazio com uma vírgula
const [primeiro,, terceiro] = ["Maçã", "Banana", "Laranja"];
console.log(primeiro); // "Maçã"
console.log(terceiro); // "Laranja"

// .filter() - O Porteiro Seletivo
// A Ideia Central: SELECIONAR itens de um array.
// Ele é como um porteiro de uma festa: só deixa entrar quem está na lista.

// A função que você passa para o .filter() (o callback) deve retornar true (para manter o elemento) ou false (para descartar o elemento).

const produtos = [
  { nome: "Mouse", preco: 150 },
  { nome: "Teclado", preco: 80 },
  { nome: "Monitor", preco: 1200 },
  { nome: "Webcam", preco: 95 }
];




// const produtosCaros = produtos.filter((produto) => {
//   return produto.preco > 100;
// });
// {} nao preciso de chaves caso a funcao tenha somente uma linha dentro do corpo dela {}
// com a retirada das {} tambem nao preciso do return
// se o parametro for unico o uso dos parenteses () é opcional
const produtosCaros = produtos.filter(produto => produto.preco > 100)
console.log(produtosCaros)

const produtosCarosCurto = produtos.filter(({preco}) => preco > 100)
console.log(produtosCarosCurto);

//  .map() - A Linha de Montagem Transformadora
// A Ideia Central: TRANSFORMAR os itens de um array.

// O .map() cria um novo array com o mesmo número de elementos do original, mas cada elemento é o resultado do que a sua função de callback retornou

const produtosFormatados = produtos.map((produto) => {
  const precoFinal = produto.preco * 1.10
  return `${produto.nome}: R$ ${precoFinal.toFixed(2)}`;
}) 

console.log(produtosFormatados)

// A partir de uma lista de alunos (objetos), 
// queremos gerar um array de strings contendo o nome e a situação final apenas dos alunos aprovados (nota >= 7).

const alunos = [
  { nome: "Beatriz", nota: 9 },
  { nome: "Daniel", nota: 5 },
  { nome: "Clara", nota: 7 },
  { nome: "Lucas", nota: 4 }
];