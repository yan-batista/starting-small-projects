var img;
window.addEventListener('load', function() {
	img = document.getElementById('lampada');
	img.addEventListener('click', turnOn, false);
});

function turnOn() {
	img.src="lampada_on.gif"
	img.removeEventListener('click', turnOn);
	img.addEventListener('click', turnOff, false);
}

function turnOff() {
	img.src="lampada_off.gif"
	img.removeEventListener('click', turnOff);
	img.addEventListener('click', turnOn, false);
}