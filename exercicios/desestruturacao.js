// Exercícios de Manipulação de Dados

// Exercício 1: Catálogo de Filmes (Praticando `.map`)

// Objetivo:Praticar a transformação de um array de objetos em um array de strings formatadas.

// Cenário:Você tem um array de objetos, onde cada objeto representa um filme.


const filmes = [
  { titulo: 'O Poderoso Chefão', ano: 1972, nota: 9.2 },
  { titulo: 'Forrest Gump', ano: 1994, nota: 8.8 },
  { titulo: 'A Origem', ano: 2010, nota: 8.8 },
  { titulo: 'O Senhor dos Anéis: O Retorno do Rei', ano: 2003, nota: 9.0 }
];

// crie um novo array chamado titulosFormatados que contenha strings no seguinte formato: "<Título> (<Ano>)".

titulosFormatados = filmes.map(({titulo, ano}) => {
    return `${titulo} (${ano})`;
})

console.log("--- Exercício 1: Títulos Formatados ---");
console.log(titulosFormatados);
// --------
// Seleção de Candidatos (Praticando .filter)
// Objetivo: Praticar a seleção de objetos de um array com base em múltiplas condições.

// Cenário: Você tem uma lista de candidatos para uma vaga de desenvolvedor.


const candidatos = [
  { nome: 'Ana', senioridade: 'Júnior', tecnologias: ['JavaScript', 'React'] },
  { nome: 'Bruno', senioridade: 'Pleno', tecnologias: ['Python', 'Django'] },
  { nome: 'Carla', senioridade: 'Sênior', tecnologias: ['JavaScript', 'React', 'Node.js'] },
  { nome: 'Daniel', senioridade: 'Pleno', tecnologias: ['JavaScript', 'Vue'] }
];

// O que você precisa fazer:
// Usando o método .filter() e desestruturação, crie um novo array chamado candidatosFiltrados que contenha apenas os candidatos que atendam a duas condições:

// A senioridade seja "Pleno" ou "Sênior".

// A lista de tecnologias inclua "JavaScript". 

candidatosAprovados = candidatos.filter(({senioridade, tecnologias}) => {
    const sabeJavascript = tecnologias.includes('JavaScript')
    const senioridadeValida = senioridade === 'Pleno' || senioridade === "Sênior"
    return sabeJavascript && senioridadeValida
})

console.log("\n--- Exercício 2: Candidatos Filtrados ---");
console.log(candidatosAprovados);

// Relatório de Vendas (Combinando .filter e .map)
// Objetivo: Praticar o encadeamento dos métodos para resolver um problema em duas etapas.

// Cenário: Você tem um array com dados de vendas de produtos.


const vendas = [
  { produto: 'Notebook', valor: 4500, quantidade: 2 },
  { produto: 'Mouse', valor: 150, quantidade: 10 },
  { produto: 'Monitor', valor: 1200, quantidade: 5 },
  { produto: 'Teclado', valor: 80, quantidade: 20 }
];
// O que você precisa fazer:
// Crie um relatório que mostre o valor total (valor * quantidade) de cada venda, mas apenas para as vendas cujo valor total ultrapasse R$ 5.000,00. O resultado final deve ser um array de strings.

// Passos:

// Filtre o array vendas para manter apenas os itens onde valor * quantidade > 5000.

// Mapeie o array resultante para criar strings no formato: "<Produto>: R$ <Valor Total>"

// Desafio Final: Organizando Dados de uma API
// Objetivo: Simular uma tarefa real de organização de dados complexos recebidos de uma API.

// Cenário: Você recebeu uma lista de usuários com dados aninhados.

// JavaScript

// const dadosAPI = [
//   {
//     id: 1,
//     nome: 'Leanne Graham',
//     email: 'Sincere@april.biz',
//     endereco: {
//       rua: 'Kulas Light',
//       cidade: 'Gwenborough',
//     },
//     ativo: true
//   },
//   {
//     id: 2,
//     nome: 'Ervin Howell',
//     email: 'Shanna@melissa.tv',
//     endereco: {
//       rua: 'Victor Plains',
//       cidade: 'Wisokyburgh',
//     },
//     ativo: false
//   },
//   {
//     id: 3,
//     nome: 'Clementine Bauch',
//     email: 'Nathan@yesenia.net',
//     endereco: {
//       rua: 'Douglas Extension',
//       cidade: 'McKenziehaven',
//     },
//     ativo: true
//   }
// ];
// O que você precisa fazer:
// Crie um novo array de objetos chamado usuariosFormatados. Este array deve conter objetos com uma estrutura mais simples, mas apenas dos usuários que estão ativos.