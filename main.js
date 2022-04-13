//Definição das principais variáveis da Calculadora, informando ao JS o que cada lista e referência irá controlar no HTML;
const listaOperadores = document.querySelectorAll(".operador");
const listaAlgarismos = document.querySelectorAll(".algarismo");
const visorCalc = document.querySelector(".visor");
const igual = document.querySelector(".igual");
const zerar = document.querySelector(".zerar");
visorCalc.value = "";

//Define a lista que irá conter os números e o operador para a conta ser feita;
let listaOperacao = new Array(3);

//Define a variável auxiliar que servirá de índice para a listaOperacao;
let aux = 0;

//Define as variáveis a serem utilizadas na string de números;
let numeroString = ``;
let auxString = ``;

//Define a variável do operador;
let numeroVisor;

//Esta variável irá guardar o resultado das operações;
let resultado;

//Esta função zera o visor, a lista de operação (primeiro número, operador e segundo número) e as variáveis da string;
function zeraVisor () {
	visorCalc.value = null;
	for(let i = 0; i < listaOperacao.length; i++){
		listaOperacao[i] = null;
	}
	auxString = ``;
	numeroString = ``;
}

//Irá constantemente agrupando os algarismos clicados para formar grandes números;
function concatenaAlgarismo (indiceAlgarismo) {
	auxString = `${listaAlgarismos[indiceAlgarismo].value}`;
	numeroString = `${numeroString}${auxString}`;
	console.log(numeroString);
	visorCalc.value = numeroString;
}

//Define o que cada operador irá fazer;
function operadorClicado (op) {
	if(visorCalc.value != ""){
		numeroVisor = visorCalc.value;
		visorCalc.value = null;
		auxString = ``;
		numeroString = ``;
		listaOperacao[0] = parseFloat(numeroVisor);
		listaOperacao[1] = op;
	}else {
		console.log("Erro de utilização!");
	}
}

//Função executada pelo botão de igual;
function fazConta () {
	if(listaOperacao[0] !== null && listaOperacao[1] !== null && visorCalc.value !== ""){
		listaOperacao[2] = parseFloat(visorCalc.value);
		visorCalc.value = null;
		auxString = ``;
		numeroString = ``;
	}else {
		console.log("Erro de utilização no igual!");
	}

	//Parte central do código, estas linhas realizam a conta em si
	if(listaOperacao[1] == "+"){
		resultado = listaOperacao[0] + listaOperacao[2];
	} else if(listaOperacao[1] == "-") {
		resultado = listaOperacao[0] - listaOperacao[2];
	} else if (listaOperacao[1] == "*"){
		resultado = listaOperacao[0] * listaOperacao[2];
	} else if (listaOperacao[1] == "/"){
		resultado = listaOperacao[0] / listaOperacao[2];
	}else {
		zeraVisor();
		alert("Erro Inesperado!");
	}

	//Exibe o resultado no visor da calculadora;
	visorCalc.value = resultado;
}

//Aplica a função zeraVisor ao botão Zerar;
zerar.onclick = zeraVisor;

//Este for aplica a função concatenaAlgarismo a todos os algarismos da calculadora na propriedade "onclick";
for(let i = 0; i < listaAlgarismos.length; i++){
	listaAlgarismos[i].onclick = function () {
		concatenaAlgarismo(i);
	}
}

//Define comportamento dos operadores;
for(let i = 0; i < listaOperadores.length; i++){
	let operacao = listaOperadores[i].value;
	listaOperadores[i].onclick = function () {
		operadorClicado(operacao);
	}
}

//Define função anônima para o botão de igual;
igual.onclick = function () {
	fazConta();
}
