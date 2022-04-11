//Definição das principais variáveis da Calculadora, informando ao JS o que cada lista e referência irá controlar no HTML;
const listaOperadores = document.querySelectorAll(".operador");
const listaAlgarismos = document.querySelectorAll(".algarismo");
const visorCalc = document.querySelector(".visor");
const igual = document.querySelector(".igual");
const zerar = document.querySelector(".zerar");

//Define a lista que irá conter os números e o operador para a conta ser feita;
let listaOperacao = new Array(3);

//Define a variável auxiliar que servirá de índice para a listaOperacao;
let aux = 0;

/*
Até aqui acertei a lógica da função, mas a estou chamando no momento errado.
Devo corrigir o for, pois cada número clicado deve ser armazenado no visor antes de ir para a listaOperacao.
Amanhã irei corrigir esse defeito no código e terminar a lógica;
*/

//Função que define que cada primeiro algarismo clicado deve ser armazenado no índice 0 da listaOperacao;
function guardaAlgarismo (indiceAlgarismo) {
	if(aux < listaOperacao.length){
		listaOperacao[aux] = listaAlgarismos[indiceAlgarismo].value;
		aux++;
	}else {
		listaOperacao[0] = listaAlgarismos[indiceAlgarismo].value;
		aux = 1;
	}
}

//Este for aplica a função guardaAlgarismo a todos os algarismos da calculadora na propriedade "onclick";
for(let i = 0; i < listaAlgarismos.length; i++){
	listaAlgarismos[i].onclick = function () {
		guardaAlgarismo(i);
	}
}
