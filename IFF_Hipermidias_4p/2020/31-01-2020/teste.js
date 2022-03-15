function alerta() {
	alert("Testando um alert");
}

function confirmacao() {
	confirm("Testando uma confirmação");
}

function disparar_prompt() {
	var x = window.prompt("Informe o número: ");
	(x == reverteStr(x) ? alert("É um palindromo") : alert("Não é um palindromo"));
}

function reverteStr(str) {
	return str.split("").reverse().join("");
}

function promptFatorial() {
	x = parseInt(prompt("Digite um número inteiro"));
	alert(fatorial(x));
}

function fatorial(num) {
	return num <= 0 ? 1 : num*(fatorial(num-1));
}