# Calculadora-Oline
Calculadora exibida online via HTML e CSS, com foco no CSS Grid. Utilizei quatro (sub)grids dentro de uma principal, a qual engloba todos os botões da calculadora.
A apresentação do site como um todo não foi o objetivo deste projeto, porém implementei um estilo padrão em todos os botões para quando forem clicados.

Este foi o meu primeiro projeto utilizando grids, deu muito trabalho e foi difícil entender como elas funcionam, mas depois de analisar e revisar muito o meu código
cheguei a um resultado satisfatório.

Um desafio à parte foi o JavaScript com a lógica da calculadora: criei várias funções que armazenavam os números clicados de forma diferente, fui aprimorando elas
continuamente e conluí que deveria armazenar o número digitado em duas etapas: primeiro concatenando os valores digitados em uma template string, e somente quando um
operador fosse clicado é que essa string - que estava sendo exibida e alterada no visor da caluladora - seria armazenada no primeio índice da listaOperacao, e o operador
no segundo índice. Depois disso o usuário iria informar o segundo número e clicar no sinal de igual, o qual, uma vez acionado, armazenaria o segundo número no
terceiro índice daquela lista.

Uma vez possuindo todos os números e o operador a ser utilizado, a conta é feita e exibida no visor. Por esta lógica, se depois de uma conta finalizada o usuário clicar
novamente no sinal de igual, a conta será refeita, com a diferença que o primeiro índice da listaOperação será agora o resultado da operação anteior; tanto o operador
quanto o segundo número informados anteriormente serão reutilizados indefinidamente.

A calculadora lida bem com divisões, pois utilizei o parseFloat() para definir os números a serem operados. O projeto conta também com alguns avisos tanto em forma de
"alert()" quanto de "console.log()" caso algo não aconteça na ordem usual.
