var mm;
var yy = 2020;
var headMonth;
var today;
var months = [];

window.addEventListener('load', function() {
    today = new Date();
    mm = today.getMonth() + 1;

    months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    tbl = document.getElementById('calendar');
    headMonth = document.getElementById('headMonth');

    var previousBT = this.document.getElementById('previousMonth');
    if(previousBT !== null)
        previousBT.addEventListener('click', previousMonth, false);
    
    var nextBT = this.document.getElementById('nextMonth');
    if(nextBT !== null) {
        nextBT.addEventListener('click', nextMonth, false);
    }

    generateCalendar();
});

function previousMonth() {
    if(mm != 1)
        mm--;
    generateCalendar();
}

function nextMonth() {
    if(mm != 12)
        mm++;
    generateCalendar();
}

function getMonthLenght(year, month) {
    return new Date(year, month, 0).getDate();
}

function getFirstDay(year,month) {
    return new Date(yy + '/' + mm + "/" + 1).getDay();
}

function generateCalendar() {
    tbl.innerHTML = "";
    headMonth.innerHTML = months[mm - 1];

    //Used to fill TH element with days of the week
    var date = 1;
    var days = ["S", "M", "T", "W", "T", "F", "S"];
    var row = document.createElement('tr');
    days.forEach(function(currentValue) {
        var cell = document.createElement('th');
        var cellText = document.createTextNode(currentValue);
        cell.appendChild(cellText);
        row.appendChild(cell);
        tbl.appendChild(row);  
    });

    //Used to fill TD elements with the days
    for(var i = 0; i < 7; i++) {
        var row = document.createElement('tr');

        for(var j = 0; j < 7; j++) {
            if(i == 0 && j < getFirstDay(yy,mm)) {
                cell = document.createElement('td');
                cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            } else if (date > getMonthLenght(yy, mm)) {
                break;
            } else {
                cell = document.createElement('td');
                cellText = document.createTextNode(date);
                cell.appendChild(cellText);
                row.appendChild(cell);
                if(date == today.getDate() && mm == today.getMonth() + 1) {
                    cell.className = "selected";
                }
                date++;
            }
        }
        tbl.appendChild(row);
    }
}