$(document).ready(function (){
    window.setInterval(function() {
        var currentTime=moment().format("MMMM Do YYYY, h:mm:ss a");
        $("#currentDay").text(currenttime);
        renderBlock();
    }
}, 1000);

var currentTime=(moment()).toString();
var timeSlot9am=(moment('09:00', 'HH:MM')).toString();
var timeSlot10am=(moment('10:00', 'HH:MM')).toString();
var timeSlot11am=(moment('11:00', 'HH:MM')).toString();
var timeSlot12pm=(moment('12:00', 'HH:MM')).toString();
var timeSlot1pm=(moment('13:00', 'HH:MM')).toString();
var timeSlot2pm=(moment('14:00', 'HH:MM')).toString();
var timeSlot3pm=(moment('15:00', 'HH:MM')).toString();
var timeSlot4pm=(moment('16:00', 'HH:MM')).toString();
var timeSlot5pm=(moment('17:00', 'HH:MM')).toString();

// Time Slot 9am
if (currentTime<timeAt9am)