var dataC;
var dataS;
var tipoQ;
var criancaQ;

window.addEventListener('load', function() {
	dataC = document.getElementById('dataChegada');
	dataS = document.getElementById('dataSaida');
	tipoQ = document.getElementById('tipoQuarto');
	criancaQ = document.getElementById('quantCrianca');

	document.getElementById('enviarBT').addEventListener('click', calcular, false);
});

function calcular() {
	var dias = new Date(dataS.value).getTime() - new Date(dataC.value).getTime();
	dias = dias / 1000 / 60 / 60 / 24;

	var quartoValor = tipoQ.value;

	var criancaMax;
	if(quartoValor == 139) {
		criancaMax = 3;
	} else if(quartoValor == 220) {
		criancaMax = 2;
	} else {
		criancaMax = 1;
	}

	if(criancaQ.value > criancaMax) {
		alert("O número de crianças passa do limite do quarto");
	} else {
		var result = (parseInt(quartoValor) + (30*parseInt(criancaQ.value))) * dias;
		alert("O valor total foi: " + result);
	}

}

