var curr_selected;
var curr_target;
var result;
var amount;
var swap_icon;

var curr = [];

window.addEventListener('load', function() {
    curr_selected = document.getElementById('option');
    curr_selected.addEventListener('change', exchangeRate, false);
    amount = document.getElementById('amount');
    amount.addEventListener('change', exchangeRate, false);
    curr_target = document.getElementById('option_target');
    curr_target.addEventListener('change', exchangeRate, false);

    result = document.getElementById('result');
    this.document.getElementById('swap').addEventListener('click', swap, false);

    exchangeRate();
});

function exchangeRate() {
    $.getJSON("https://api.exchangerate-api.com/v4/latest/" + curr_selected.value, function(data) {
        curr = data.rates;
        result.value = (curr[curr_target.value] * amount.value).toFixed(2);
    });
}

function swap() {
    var temp;
    amount.value = result.value;
    temp = curr_selected.value;
    curr_selected.value = curr_target.value;
    curr_target.value = temp;
    exchangeRate();
}