// DATE TODAY

var today = new Date();
var date = today.getDate();
var datesuf;
switch (today.getDate()) {
  case 1:
    datesuf = 'st';
    break;

  case 2:
    datesuf = 'nd';
    break;

  case 3:
    datesuf = 'rd';
    break;

  case 4:
    datesuf = 'th';
    break;

  case 5:
    datesuf = 'th';
    break;

  case 6:
    datesuf = 'th';
    break;

  case 7:
    datesuf = 'th';
    break;

  case 8:
    datesuf = 'th';
    break;

  case 9:
    datesuf = 'th';
    break;

  case 10:
    datesuf = 'th';
    break;

  case 11:
    datesuf = 'th';
    break;

  case 12:
    datesuf = 'th';
    break;

  case 13:
    datesuf = 'th';
    break;

  case 14:
    datesuf = 'th';
    break;

  case 15:
    datesuf = 'th';
    break;

  case 16:
    datesuf = 'th';
    break;

  case 17:
    datesuf = 'th';
    break;

  case 18:
    datesuf = 'th';
    break;

  case 19:
    datesuf = 'th';
    break;

  case 20:
    datesuf = 'th';
    break;

  case 21:
    datesuf = 'st';
    break;

  case 22:
    datesuf = 'nd';
    break;

  case 23:
    datesuf = 'rd';
    break;

  case 24:
    datesuf = 'th';
    break;

  case 25:
    datesuf = 'th';
    break;

  case 26:
    datesuf = 'th';
    break;

  case 27:
    datesuf = 'th';
    break;

  case 28:
    datesuf = 'th';
    break;

  case 29:
    datesuf = 'th';
    break;

  case 30:
    datesuf = 'th';
    break;

  case 31:
    datesuf = 'st';
    break;
}
var month = today.getMonth();
switch (today.getMonth()) {
  case 0:
    month = 'January';
    break;

  case 1:
    month = 'February';
    break;

  case 2:
    month = 'March';
    break;

  case 3:
    month = 'April';
    break;

  case 4:
    month = 'May';
    break;

  case 5:
    month = 'June';
    break;

  case 6:
    month = 'July';
    break;

  case 7:
    month = 'August';
    break;

  case 8:
    month = 'September';
    break;

  case 9:
    month = 'October';
    break;

  case 10:
    month = 'November';
    break;

  case 11:
    month = 'December';
    break;
}
var year = today.getFullYear();

var fulldate = date + datesuf + " of " + month + " " + year + "."

// TIME BETWEEN

var first = 7 + "/" + 11 + "/" + 2014
var second = date + "/" + (today.getMonth() + 1) + "/" + year

function parseDate(str) {
  var mdy = str.split('/');
  return new Date(mdy[2], mdy[1] - 1, mdy[0]);
}

function datediffday(first, second) {
  return (Math.round((second - first) / 86400000));
}
function datediffhour(first, second) {
  return (Math.round((second - first) / 86400000)) * 24;
}

// DECIMAL HOURS
var milhours
var milmins

function calculate() {
  var hourssince = datediffhour(parseDate(first), parseDate(second))
  var decimalhour = hourssince * 0.00001630789

  var hrs = parseInt(Number(decimalhour))
  var min = (Number(decimalhour) - hrs) * 60

  var milhours = hrs
  var milmins = min
  document.getElementById('decimalhour').innerHTML = "It has been " + decimalhour + " hours on miller since then (in decimal hours)."
  document.getElementById('final').innerHTML = "Finally - the time from Interstellar releasing to today, on miller's planet is<br> " + milhours + " hours and " + milmins + " minutes."
}
function calculater() {
  var hourssince = datediffhour(parseDate(first), parseDate(second))
  var decimalhour = hourssince * 0.00001630789

  var hrs = parseInt(Number(decimalhour))
  var min = (Number(decimalhour) - hrs) * 60
  min = Math.round(min)

  var milhours = hrs
  var milmins = min
  document.getElementById('decimalhour').innerHTML = "It has been " + decimalhour + " hours on miller since then (in decimal hours)."
  document.getElementById('final').innerHTML = "Finally - the time from Interstellar releasing to today, on miller's planet is<br> " + milhours + " hours and " + milmins + " minutes."
}

// FINAL

document.getElementById('datetext').innerHTML = ("Interstellar was released on the 7th of November 2014. It is now the " + fulldate);
document.getElementById('daysbetween').innerHTML = "It has been " + (datediffday(parseDate(first), parseDate(second))) + " Earth days and " + (datediffhour(parseDate(first), parseDate(second))) + " Earth hours since then.";
if (!milhours || isNaN(milhours) || !milmins || isNaN(milmins)) { document.getElementById('final').innerHTML = "Finally - the time from Interstellar releasing to today, on miller's planet is<br> " + "?" + " hours and " + "?" + " minutes." }
$('<input type="button" value="Decimal answer" onclick="calculate()" input>').appendTo($('#finals'));