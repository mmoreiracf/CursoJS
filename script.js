const nome = 'matheus'
const idadeA = 28

console.log(`Meu nome � ${nome} e tenho ${idadeA} anos.`)
console.log(typeof (nome))

if (nome === 'matheus') {
    console.log('O nome � matheus')
}

if (2 == '2')
    console.log('2 � igual a 2')

let idade = 18;

if(idade >= 18){
    console.log('if - maior de idade')
}else if( idade >= 16) {
    console.log('if - pode votar')
}else{
    console.log('if - adolescente')
}

let cnh = true;

if(idade >= 18 && cnh == true){
    console.log('if - pode dirigir')
}else{
    console.log('if - não pode dirigir')
}


switch (idade) {
    case (18):
        console.log("switch - maior de idade");
        break;
    case (idade > 16):
        console.log('switch -pode votar');
        break;
    default:
        console.log("switch -adolescente");
        break;
}
// if(idade > 18){
//     console.log('maior de idade')
// }

// if( idade >= 16) {
//     console.log('pode votar')
// }

let nivelDeAcesso = 'admin';
let mensagem

// O switch vai comparar o valor de 'nivelDeAcesso' com cada 'case'
switch (nivelDeAcesso) {
  case 'admin':
    mensagem = 'Acesso total concedido. Bem-vindo, Administrador!';
    break; // O 'break' é essencial para sair do switch após encontrar uma correspondência
case 'editor':
    mensagem = 'Acesso concedido para criar e editar conteúdo.';
    break;
case 'guest':
    mensagem = 'Acesso de convidado. Você pode apenas visualizar o conteúdo.';
    break;
default:
    mensagem = 'Nível de acesso desconhecido. Acesso negado.';
    break;
}

console.log(mensagem)


// do {
//     // passar pelo menos uma vez aqui
// }while(/*condicao*/);

// while(/*condicao*/){
//     // ele so vai passr se a condicao corresponder
// }

let bairro = 'Santa Monica'
let contador = 0;
// do {
//     console.log('Bairro:', bairro)
//     console.log('Contador ', contador)
//     contador++;
// }while(bairro === "Santa Monica" && contador <=3 );

while(bairro === "Santa" && contador <=3 ){
    console.log('Bairro:', bairro)
    console.log('Contador ', contador)
    contador++;
}