var voiceOptions;
var voices = [];
var synth = window.speechSynthesis;

window.addEventListener('load', function() {
    voiceOptions = document.getElementById('voiceOptions');
    var userInput = document.getElementById('userInput');
    var rate = document.getElementById('rate');
    var pitch = document.getElementById('pitch');

    populateVoices();
    if(synth.onvoiceschanged !== undefined) {
        synth.onvoiceschanged = populateVoices;
    }

    this.document.getElementById('subBT').addEventListener('click', function() {
        var utterThis = new SpeechSynthesisUtterance(userInput.value);
        var selectedOption = voiceOptions.selectedOptions[0].getAttribute('data-name');
        for(var i = 0; i < voices.length; i++) {
            if(selectedOption == voices[i].name) {
                utterThis.voice = voices[i];
            }
        }
        utterThis.rate = rate.value;
        utterThis.pitch = pitch.value;
        synth.speak(utterThis);
    });
});

function populateVoices() {
    voices = synth.getVoices();
    voices.sort(function(a,b) {
        if(a.lang < b.lang)
            return -1;
        else if(a.lang > b.lang)
            return 1
        else 
            return 0;
    });
    
    for(var i = 0; i < voices.length; i++) {
        var opt = document.createElement('option');
        var optText;
        if(voices[i].default)
            optText = document.createTextNode(voices[i].name + ' (' + voices[i].lang + ') -- DEFAULT');
        else
            optText = document.createTextNode(voices[i].name + ' (' + voices[i].lang + ')');
        opt.appendChild(optText);

        opt.setAttribute('data-name', voices[i].name);

        voiceOptions.appendChild(opt);
    }
}