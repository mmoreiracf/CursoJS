
//  Exercícios com `if-else` (Estruturas Condicionais)

//  Nível Iniciante

// 1.  Verificador de Número Positivo ou Negativo:

//        Peça ao usuário para inserir um número.
//        Use `if-else` para verificar se o número é positivo, negativo ou zero.
//        Exiba a mensagem correspondente (ex: "O número é positivo.").

// 2.  Verificador de Idade:

//        Peça ao usuário para inserir sua idade.
//        Verifique se a pessoa é maior de idade (18 anos ou mais).
//        Exiba "Você é maior de idade" ou "Você é menor de idade".

// 3.  Login Simples:

//        Defina um nome de usuário e uma senha em variáveis.
//        Peça ao usuário para inserir um nome de usuário e uma senha.
//        Verifique se o nome de usuário e a senha estão corretos.
//        Exiba "Login bem-sucedido\!" ou "Nome de usuário ou senha incorretos."

//  Nível Intermediário

// 4.  Calculadora de Média Escolar:

//        Peça ao usuário para inserir três notas de um aluno (de 0 a 10).
//        Calcule a média dessas notas.
//        Use `if-else if-else` para determinar o status do aluno:
//            Média \>= 7: "Aprovado"
//            Média \>= 5 e \< 7: "Recuperação"
//            Média \< 5: "Reprovado"

// 5.  Verificador de Ano Bissexto:

//        Peça ao usuário para inserir um ano.
//        Verifique se o ano é bissexto. Um ano é bissexto se for:
//            Divisível por 4, mas não por 100, a menos que também seja divisível por 400.
//        Exiba "É um ano bissexto" ou "Não é um ano bissexto".

// -----

//  Exercícios com `switch-case` (Estruturas de Seleção)

//  Nível Iniciante

// 1.  Dias da Semana:

//        Peça ao usuário para inserir um número de 1 a 7.
//        Use um `switch-case` para exibir o nome do dia da semana correspondente (1 para Domingo, 2 para Segunda, etc.).
//        Inclua um caso `default` para números inválidos.

// 2.  Cardápio de Lanchonete:

//        Mostre um cardápio com códigos: 100 - Cachorro-quente, 101 - Bauru, 102 - Misto Quente, 103 - Hambúrguer.
//        Peça ao usuário para digitar o código do item desejado.
//        Use `switch-case` para exibir o nome do lanche escolhido.

//  Nível Intermediário

// 3.  Permissões de Usuário:

//        Crie uma variável `perfil` que pode ter os valores: `'admin'`, `'gestor'` ou `'usuario'`.
//        Use um `switch-case` para exibir as permissões de cada perfil:
//            `'admin'`: "Acesso total ao sistema."
//            `'gestor'`: "Acesso a relatórios e gerenciamento de usuários."
//            `'usuario'`: "Acesso apenas para visualização."
//            `default`: "Perfil desconhecido."

// 4.  Meses do Ano:

//        Peça ao usuário um número de 1 a 12.
//        Use `switch-case` para agrupar os meses por trimestre e exibir a qual trimestre o mês pertence.
//            Casos 1, 2, 3: "Primeiro trimestre"
//            Casos 4, 5, 6: "Segundo trimestre"
//            E assim por diante. (Dica: você pode agrupar `case` sem `break`).

// -----

//  Exercícios com `Loops` (Estruturas de Repetição)

//  Exercícios com `for`

// 1.  Contagem de 1 a 50:

//        Use um loop `for` para imprimir todos os números de 1 a 50 no console.

// 2.  Tabuada:

//        Peça ao usuário para inserir um número.
//        Use um loop `for` para calcular e exibir a tabuada desse número (de 1 a 10).
//        Exemplo de saída para o número 5:
//         ```
//         5 x 1 = 5
//         5 x 2 = 10
//         ...
//         5 x 10 = 50
//         ```

// 3.  Soma dos Primeiros 100 Números:

//        Use um loop `for` para calcular a soma de todos os números de 1 a 100.
//        Ao final, exiba o resultado total.

// 4.  Contagem de Números Pares:

//        Use um loop `for` para percorrer os números de 1 a 100 e imprimir apenas os números que são pares.

//  Exercícios com `while`

// 1.  Contagem Regressiva:

//        Use um loop `while` para fazer uma contagem regressiva de 10 até 0.
//        Exiba cada número no console e, no final, a mensagem "Fogo\!".

// 2.  Validação de Senha:

//        Defina uma senha em uma variável (ex: `'senha123'`).
//        Peça ao usuário para digitar a senha repetidamente até que ele acerte.
//        Use um loop `while` que continue executando enquanto a senha inserida for diferente da correta.
//        Quando acertar, exiba "Acesso permitido\!".

// 3.  Soma de Entradas do Usuário:

//        Crie um programa que pede ao usuário para digitar números.
//        Use um loop `while` para continuar somando os números digitados.
//        O loop deve parar quando o usuário digitar o número `0`.
//        No final, exiba a soma total de todos os números inseridos.

// 4.  Adivinhe o Número:

//        Gere um número aleatório entre 1 e 100 (pesquise como fazer isso na sua linguagem de programação).
//        Peça ao usuário para adivinhar o número.
//        Use um loop `while` para continuar pedindo palpites até que o usuário acerte.
//        Dê dicas se o palpite foi "muito alto" ou "muito baixo".