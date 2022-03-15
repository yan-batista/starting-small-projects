var i = 0;

function outputsNum() {
	if(output.innerHTML == 0 ? output.innerHTML = this.value : output.innerHTML += this.value);
}

function operator() {
    console.log(this.value);
    if(this.value == 'C' ? output.innerHTML = '0' : output.innerHTML = (eval(output.innerHTML)));
}

function addListeners(value) {
    if(i < 9) {
        for(i = 0; i <= 9; i++) {
            var x = document.getElementById('button-' + i);
            x.addEventListener('click', outputsNum, false);
        }
    } 
    if(i > 9) {
        var y = document.getElementById(value);
        y.addEventListener('click', outputsNum, false);
    }      
}

var output = document.getElementById('calc-output');

var cleanBT = document.getElementById('button-C');
cleanBT.addEventListener('click', operator, false);

var equalBT = document.getElementById('button-=');
equalBT.addEventListener('click', operator, false);

var operators = ['button-+', 'button--', 'button-/', 'button-*'];
document.scripts.onload = operators.forEach(addListeners);