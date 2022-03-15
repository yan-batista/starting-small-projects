function hide() {
	this.innerHTML = "Mostrar texto";
	this.removeEventListener('click', hide, false);
	this.addEventListener('click', show, false);
	this.previousSibling.previousSibling.style.display = "none";
}

function show() {
	this.innerHTML = "Ocultar Conteúdo";
	this.removeEventListener('click', show, false);
	this.addEventListener('click', hide, false);
	this.previousSibling.previousSibling.style.display = "block";
}

var link1 = document.getElementById('enlace_1');
link1.addEventListener('click', hide, false);

var link2 = document.getElementById('enlace_2');
link2.addEventListener('click', hide, false);

var link3 = document.getElementById('enlace_3');
link3.addEventListener('click', hide, false);