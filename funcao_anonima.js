// 1. Função Anônima: A Função "Descartável"
// Como o nome diz, uma função anônima é simplesmente uma função que não tem nome.

// Para que serve?
// Ela é usada para tarefas rápidas e de uso único, onde você não precisa reutilizar aquela lógica em outro lugar

function mostrarAlerta() {
  console.log("Olá! Esta é uma função nomeada.");
}

setTimeout(function () {
  console.log("Olá! Esta é uma função nomeada.");
}, 2000); 

setTimeout(() =>
  console.log("Olá! Esta é uma função nomeada.")
, 2000); 

function somar(a,b){
    return a+b;
}

let numero1 = 1
const soma1 = (a,b) => {
    return a+b; 
}

console.log(soma1(2,2))
const soma2 = (a,b) => a+b; 


const numero = a => a; 

// map, reduce, filter
