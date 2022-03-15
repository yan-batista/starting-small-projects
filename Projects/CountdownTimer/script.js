var eventName;
var date;
var hour;
var min;
var timerContainer;

var timerCounter = 0;
var elem = [];
var i = 0;

window.addEventListener('load', function() {
    eventName = document.getElementById('eventName');
    date = document.getElementById('date');
    hour = document.getElementById('hour');
    min = document.getElementById('min');
    document.getElementById('startBtn').addEventListener('click', createTimer);

    timerContainer = document.getElementById('timerContainer');
});

function calc(elem, countDownDate) {
    var calcTimer = setInterval(function(){
    var now = new Date().getTime();
    var timeleft = countDownDate - now;
        
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
        
    
    elem.childNodes[1].children[0].innerHTML = days;
    elem.childNodes[1].children[1].innerHTML = hours;
    elem.childNodes[1].children[3].innerHTML = minutes;
    elem.childNodes[1].children[5].innerHTML = seconds;

    if(timeleft < 0) {
        clearInterval(calcTimer);
        elem.childNodes[1].children[0].innerHTML = '00';
        elem.childNodes[1].children[1].innerHTML = '00';
        elem.childNodes[1].children[3].innerHTML = '00';
        elem.childNodes[1].children[5].innerHTML = '00';  
    }
    }, 1000);
}

function createTimer() {

    if(timerContainer.firstChild.id == "noCountdown") {
        timerContainer.removeChild(document.getElementById('noCountdown'));
    }

    var timer = document.createElement('div');
    timer.id = "timer";

    var _eventName = document.createElement('p');
    var _eventNameText = document.createTextNode(eventName.value);
    _eventName.appendChild(_eventNameText);
    timer.appendChild(_eventName);

    var countDown = document.createElement('div');
    countDown.id = "countDown";

    //Days
    var _days = document.createElement('p');
    var _daysText = document.createTextNode('00');
    _days.id = "days";
    _days.appendChild(_daysText);
    countDown.appendChild(_days);

    //Hour
    var _hours = document.createElement('p');
    var _hoursText = document.createTextNode('00');
    _hours.id = "hours";
    _hours.appendChild(_hoursText);
    countDown.appendChild(_hours);

    //Separator
    var _separator = document.createElement('p');
    var _separatorText = document.createTextNode(':');
    _separator.appendChild(_separatorText);
    countDown.appendChild(_separator);

    //Minute
    var _minutes = document.createElement('p');
    var _minutesText = document.createTextNode('00');
    _minutes.id = "mins";
    _minutes.appendChild(_minutesText);
    countDown.appendChild(_minutes);

    //Separator
    var _separator2 = document.createElement('p');
    var _separator2Text = document.createTextNode(':');
    _separator2.appendChild(_separator2Text);
    countDown.appendChild(_separator2);

    //Seconds
    var _seconds = document.createElement('p');
    var _secondsText = document.createTextNode('00');
    _seconds.id = "secs";
    _seconds.appendChild(_secondsText);
    countDown.appendChild(_seconds);

    //Close
    var _close = document.createElement('p');
    var _closeText = document.createTextNode('✖');
    _close.appendChild(_closeText);
    _close.id = "cancelTimer";
    countDown.appendChild(_close);
    _close.addEventListener('click', removeTimer);

    timer.appendChild(countDown);
    timerContainer.appendChild(timer);

    var countDownDate = new Date(date.value + ' ' + hour.value + ':' + min.value + ':' + '00').getTime();

    elem.push(timer);
    for(i; i < elem.length; i++) {
        calc(elem[i], countDownDate);
    }
    timerCounter++;
    clean();
}

function clean() {
    eventName.value = '';
    date.value = '';
    hour.value = '';
    min.value = '';
}

function removeTimer() {
    timerContainer.removeChild(this.parentElement.parentElement);

    if(timerContainer.children.length == 0) {
        var _noCount = document.createElement('p');
        var _noCountText = document.createTextNode('There is no countdowns! Create one.');
        _noCount.appendChild(_noCountText);
        _noCount.id = "noCountdown";
        timerContainer.appendChild(_noCount);
    }
}