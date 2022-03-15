var texto = document.getElementById('conteudo');
var caixa = document.getElementById('caixa');

function passText() {
	texto.innerHTML = (caixa.value);
}

caixa.addEventListener('keypress', passText, false);

