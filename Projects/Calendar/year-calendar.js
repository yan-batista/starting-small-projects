var mm;
var yy = 2020;
var headMonth = [];
var today;
var months = [];
var tbl = [];

window.addEventListener('load', function() {
    today = new Date();

    months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    tbl = document.getElementsByTagName('table');
    headMonth = document.getElementsByClassName('headMonth');

    for(var i = 0; i < tbl.length; i++) {
        generateCalendar(i);
    }
});

function getMonthLenght(year, month) {
    return new Date(year, month, 0).getDate();
}

function getFirstDay(year,month) {
    return new Date(yy + '/' + mm + "/" + 1).getDay();
}

function generateCalendar(currentIndex) {
    mm = currentIndex + 1;
    tbl[currentIndex].innerHTML = "";
    headMonth[currentIndex].innerHTML = months[currentIndex];

    //Used to fill TH element with days of the week
    var date = 1;
    var days = ["S", "M", "T", "W", "T", "F", "S"];
    var row = document.createElement('tr');
    days.forEach(function(currentValue) {
        var cell = document.createElement('th');
        var cellText = document.createTextNode(currentValue);
        cell.appendChild(cellText);
        row.appendChild(cell);
        tbl[currentIndex].appendChild(row);  
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
        tbl[currentIndex].appendChild(row);
    }
}