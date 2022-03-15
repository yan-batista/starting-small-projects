var fontsize;
var negrito;
var italico;
var sublinhado;
var texto;

window.addEventListener('load', function() {
    texto = document.getElementById('areaTexto');
    tamanhoFonte = document.getElementById('tamanhoFonte');
    tamanhoFonte.addEventListener('change', formatarFontSize, true);

    this.document.getElementById('negrito').addEventListener('click', formatarNegrito, false);
    this.document.getElementById('italico').addEventListener('click', formatarItalico, false);
    this.document.getElementById('sublinhado').addEventListener('click', formatarSublinhado, false);
});

function formatarNegrito() {
    if(texto.style.fontWeight == "bold" ? texto.style.fontWeight = "normal" : texto.style.fontWeight = "bold");
}

function formatarItalico() {
    if(texto.style.fontStyle == "italic" ? texto.style.fontStyle = "normal" : texto.style.fontStyle = "italic");
}

function formatarSublinhado() {
    if(texto.style.textDecoration == "underline" ? texto.style.textDecoration = "none" : texto.style.textDecoration = "underline");
}

function formatarFontSize() {
    texto.style.fontSize = tamanhoFonte.value + "px";
}