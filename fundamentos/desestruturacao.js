const usuario = {
  id: 42,
  nome: "João",
  idade: 34,
  email: "joao@exemplo.com"
};

// const nome = usuario.nome;
// const idade = usuario.idade;

console.log(usuario.nome)
console.log(usuario.idade)

const {nome, idade} = usuario;