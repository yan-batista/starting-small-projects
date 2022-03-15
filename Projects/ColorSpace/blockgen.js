var container;
var block;

window.addEventListener('load', function() {
    container = document.getElementById('container');
    for(var i = 0; i < 136; i++) {
        generateBlocks();
    }
});

function generateBlocks() {
    block = document.createElement('div');
    block.id = "block";
    block.addEventListener('mouseover', randomColor, false);
    block.addEventListener('mouseout', function() {
        this.style.backgroundColor = "grey";
    });

    container.appendChild(block);
}

function randomColor() {
    const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];

    this.style.backgroundColor = colors[Math.floor(Math.random() * 5)];
}