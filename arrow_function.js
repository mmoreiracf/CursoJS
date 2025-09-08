
const pessoa = {
  nome: "João",
  habilidades: ["JavaScript", "HTML", "CSS"],
  
  apresentarComFuncaoNormal: function() {
    // const that = this; 
    // console.log(this.nome);
    this.habilidades.forEach(function(habilidade) {
      console.log(`${this.nome} conhece ${habilidade}`); 
    // });
    }.bind(this));
  },

  apresentarComArrowFunction: function() {
    this.habilidades.forEach(habilidade => {
      console.log(`${this.nome} conhece ${habilidade}`);
    });
  }
};
console.log(pessoa.apresentarComFuncaoNormal) // mostra o conteudo
console.log(pessoa.apresentarComFuncaoNormal()) // mostra o conteudo


// console.log("Tentativa com Função Normal:");
// pessoa.apresentarComFuncaoNormal(); 


console.log("\nTentativa com Arrow Function:");
pessoa.apresentarComArrowFunction(); 