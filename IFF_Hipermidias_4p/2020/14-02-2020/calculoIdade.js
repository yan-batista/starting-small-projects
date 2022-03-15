window.addEventListener('load', function() {
    var data_nasc = document.getElementById('data_nasc');
    var enviarBT = document.getElementById('enviarBT');
    enviarBT.addEventListener('click', calcularIdade, false);
    var resultado = document.getElementById('resultado');
});

function calcularIdade() {
    var dob = new Date(data_nasc.value).getTime();
    var idade = Date.now() - dob;
    idade = idade /1000 /60 /60 /24 /365;
    if(dob > Date.now() ? resultado.innerHTML = "Data Invalida" : resultado.innerHTML = Math.floor(idade) + " Ano(s)");
}