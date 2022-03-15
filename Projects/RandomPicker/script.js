var userInput;
var items = [];

window.addEventListener('load', function() {
    userInput = document.getElementById('userInput');
    tags = this.document.getElementById('tags');

    userInput.addEventListener('keyup', function(e) {
        if(e.key == ',') {
           createTag(); 
        } else if(e.key == "Enter") {
            createTag();
            getRandom();
        }
    }, false);
});

function createTag() { 
    items = userInput.value.split(',');
    tags.innerHTML = "";
    console.log(items);
    for(var i = 0; i < items.length; i++) {
        if(items[i] != "") {
            var item = document.createElement('spam');
            var itemText = document.createTextNode(items[i]);
            item.appendChild(itemText);
            tags.appendChild(item);
        }
    }
}

function getRandom() {
    var index = Math.floor(Math.random() * items.length);
    var arrSpam = document.getElementsByTagName('spam');
    console.log(arrSpam[index]);
    arrSpam[index].id = "selected";
}