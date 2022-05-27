"use strict";

function addGuest() {
document.getElementById("guestRow").style.display = "block";

    var table = document.getElementById("newTable");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    
    cell1.innerHTML = '<input type="text" name="firstname" id="firstname" size="25" maxlength="50" />';
    cell2.innerHTML = '<input type="text" name="lastname" id="lasttname" size="25" maxlength="50" />';
    cell3.innerHTML = '<button type="button" id="delete" onclick="deleteBtn(this)">Delete</button>';
  }

  function deleteBtn(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("newTable").deleteRow(i);
console.log(deleteBtn);

// document.getElementById("guestRow").style.display = "none";
  }

////////////// TODAYS HOUR FUNCTION ////////////////////////////////////////////////////
var hour;
switch (new Date().getDay()) {
  case 0:
    hour = "<strong>Today's Hours</strong><br>12am - 5pm";
    break;
  case 2:
    hour = "<strong>Today's Hours</strong><br>CLOSED";
    break;
  case 6:
    hour = "<strong>Today's Hours</strong><br>10am - 9pm";
    break;
  default:
    hour = "<strong>Today's Hours</strong><br>10am - 5pm";
}
document.getElementById("todaysHour").innerHTML = hour;

  //////////////// CALENDAR FUNCTION /////////////////////////////////////////////////////
var thisDay = new Date();

document.getElementById("calendar").innerHTML = createCalendar(thisDay);
function createCalendar(calDate) {
   var calendarHTML = "<table id='calendarTable'>";
   calendarHTML += calMonth(calDate);
   calendarHTML += calWeekdayRow();
   calendarHTML += calEventRow();
   calendarHTML += "</table>";
   return calendarHTML;
}
function calMonth(calDate) {
   var monthName = ["January", "February", "March", "April", "May", "June", "July",
                     "August", "September", "October", "November", "December"];
   var thisMonth = calDate.getMonth();
   var thisYear = calDate.getFullYear();
   return "<caption>" + monthName[thisMonth] + " " + thisYear + "</caption>";
}

function calWeekdayRow() {
   var dayName = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT" ];
   var rowHTML = "<tr>";
   for(var i = 0; i < dayName.length; i++) {
      rowHTML += "<th class='calWeekdays'>" + dayName[i] + "</th>";
   }
   rowHTML += "</tr>";
      return rowHTML;
}

function calEventRow() {
    var eventName = ["Guided Tour<small><li>11am</li><li>1pm</li><li>3pm</li></small>"];
    var rowHTML = "<tr>";
    for(var i = 0; i < eventName.length; i++) {
       rowHTML += "<th class='calWeekdayEvents'>" + eventName[i] + "</th>";
    var eventName = new Array();
    eventName[0] ="Guided Tour<small><li>11am</li><li>1pm</li><li>3pm</li></small>";
    eventName[1] ="Guided Tour<small><li>11am</li><li>1pm</li><li>3pm</li></small>";
    eventName[2] ="Closed";
    eventName[3] ="Workshop<small><li>11am</li><li>3pm</li></small>";
    eventName[4] ="Guided Tour<small><li>11am</li><li>1pm</li><li>3pm</li></small>";
    eventName[5] ="Guided Tour<small><li>11am</li><li>1pm</li><li>3pm</li></small>";
    eventName[6] ="Workshop<small><li>11am</li><li>3pm</li></small>";

    console.log(eventName);
    }
    rowHTML += "</tr>";
    return rowHTML;
}
