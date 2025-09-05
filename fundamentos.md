Variaveis - espaco de memoria reservado para armazenar algo
escopo

1. Variáveis e Escopo: let e const
Antes do ES6 (2015), só existia var. Ele tinha um comportamento confuso chamado hoisting e um escopo de função, não de bloco, o que gerava muitos bugs. let e const vieram para resolver isso.

A Regra Principal: Tanto let quanto const têm escopo de bloco, o que significa que só existem dentro do bloco ({ ... }) em que foram criadas.

let
Permite que você declare variáveis que podem ser reatribuídas.

Uso: Para valores que você sabe que vão mudar, como um contador em um laço de repetição ou uma variável que vai receber um novo valor após uma operação.

|| - or
&& - and