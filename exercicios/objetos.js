// Exercício 1: O Básico (Criar, Acessar e Modificar)
// Objetivo: Praticar a criação de um objeto literal e a manipulação de suas propriedades.

// Cenário: Vamos criar um objeto para representar um Livro.

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

// xercício 2: Adicionando Comportamento (Métodos)
// Objetivo: Adicionar funções (métodos) a um objeto para que ele possa executar ações.

// Cenário: Vamos criar um objeto Retangulo.

// O que você precisa fazer:
// Crie um objeto chamado retangulo.

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

// Exercício 4: Manipulando Listas de Objetos
// Objetivo: Praticar a iteração e manipulação de um array de objetos, usando métodos como .map() e .filter().

// Cenário: Você tem uma lista de Produtos de uma loja virtual.

// O que você precisa fazer:
// Crie um array chamado produtos contendo três objetos. Cada objeto deve ter as propriedades id (number), nome (string), preco (number) e categoria (string).

// Filtrar: Crie um novo array chamado produtosDeTecnologia que contém apenas os produtos da categoria "Tecnologia".

// Mapear: Crie um novo array chamado nomesDosProdutos que contém apenas os nomes de todos os produtos.

// Filtrar e Mapear: Crie um novo array que contenha apenas os nomes dos produtos com preço abaixo de R$ 50.