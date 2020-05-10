$(document).ready(function (){
    // window.setInterval(function() {
        var currentTime=moment().format("MMMM Do YYYY, h:mm:ss a");
        $("#currentDay").text(currenttime);
//         renderBlock();
//     }
// }, 1000);

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
    var timeSlot6pm=(moment('18:00', 'HH:MM')).toString();

// Time Slot 9am
    if (currentTime<timeSlot9am){
        $("#9am").addClass("future")
    }
    else if ((currentTime >= timeSlot9am)&& (currentTime<timeSlot10am)){
        $("#9am").addClass("present")
    }
    else if (currentTime>=timeSlot10am){
        $("#9am").addClass("past")
    };

// Time Slot 10am
    if (currentTime<timeSlot10am){
        $("#10am").addClass("future")
    }
    else if ((currentTime >= timeSlot10am)&& (currentTime<timeSlot11am)){
        $("#10am").addClass("present")
    }
    else if (currentTime>=timeSlot11am){
        $("#10am").addClass("past")
    };

// Time Slot 11am
    if (currentTime<timeSlot11am){
        $("#11am").addClass("future")
    }
    else if ((currentTime >= timeSlot11am)&& (currentTime<timeSlot12pm)){
        $("#11am").addClass("present")
    }
    else if (currentTime>=timeSlot12pm){
        $("#11am").addClass("past")
    };

// Time Slot 12pm
    if (currentTime<timeSlot12pm){
        $("#12pm").addClass("future")
    }
    else if ((currentTime >= timeSlot12pm)&& (currentTime<timeSlot1pm)){
        $("#12pm").addClass("present")
    }
    else if (currentTime>=timeSlot1pm){
        $("#12pm").addClass("past")
    };

// Time Slot 1pm
    if (currentTime<timeSlot1pm){
        $("#1pm").addClass("future")
    }
    else if ((currentTime >= timeSlot1pm)&& (currentTime<timeSlot2pm)){
        $("#1pm").addClass("present")
    }
    else if (currentTime>=timeSlot2pm){
        $("#1pm").addClass("past")
    };

// Time Slot 2pm
    if (currentTime<timeSlot2pm){
        $("#2pm").addClass("future")
    }
    else if ((currentTime >= timeSlot2pm)&& (currentTime<timeSlot3pm)){
        $("#2pm").addClass("present")
    }
    else if (currentTime>=timeSlot3pm){
        $("#2pm").addClass("past")
    };

// Time Slot 3pm
    if (currentTime<timeSlot3pm){
        $("#3pm").addClass("future")
    }
    else if ((currentTime >= timeSlot3pm)&& (currentTime<timeSlot4pm)){
        $("#3pm").addClass("present")
    }
    else if (currentTime>=timeSlot4pm){
        $("#3pm").addClass("past")
    };

// Time Slot 4pm
    if (currentTime<timeSlot4pm){
        $("#4pm").addClass("future")
    }
    else if ((currentTime >= timeSlot4pm)&& (currentTime<timeSlot5pm)){
        $("#4pm").addClass("present")
    }
    else if (currentTime>=timeSlot5pm){
        $("#4pm").addClass("past")
    };

// Time Slot 5pm
    if (currentTime<timeSlot5pm){
        $("#5pm").addClass("future")
    }
    else if ((currentTime >= timeSlot5pm)&& (currentTime<timeSlot6pm)){
        $("#5pm").addClass("present")
    }
    else if (currentTime>=timeSlot6pm){
        $("#5pm").addClass("past")
    };


// On Click
// 9am
    var activity9am=localStorage.getItem("9amActivity");
    $("#9am").text(activity9am);

    $(".btnfor9").on("click", function (event) {
        var renderActivity9am=$("#9am").text();
        localStorage.setItem("9amActivity", (renderActivity9am));
    });

// 10am
    var activity10am=localStorage.getItem("10amActivity");
    $("#10am").text(activity10am);

    $(".btnfor10").on("click", function (event) {
        var renderActivity10am=$("#10am").text();
        localStorage.setItem("10amActivity", (renderActivity10am));
    });

// 11am
    var activity11am=localStorage.getItem("11amActivity");
    $("#11am").text(activity11am);

    $(".btnfor11").on("click", function (event) {
        var renderActivity11am=$("#11am").text();
        localStorage.setItem("11amActivity", (renderActivity11am));
    });

// 12pm
    var activity12pm=localStorage.getItem("12pmActivity");
    $("#12pm").text(activity12pm);

    $(".btnfor12").on("click", function (event) {
        var renderActivity12pm=$("#12pm").text();
        localStorage.setItem("12pmActivity", (renderActivity12pm));
});

// 1pm
    var activity1pm=localStorage.getItem("1pmActivity");
    $("#1pm").text(activity1pm);

    $(".btnfor1").on("click", function (event) {
        var renderActivity1pm=$("#1pm").text();
        localStorage.setItem("1pmActivity", (renderActivity1pm));
});

// 2pm
    var activity2pm=localStorage.getItem("2pmActivity");
    $("2pm").text(activity2pm);

    $(".btnfor4").on("click", function (event) {
        var renderActivity2pm=$("#2pm").text();
        localStorage.setItem("2pmActivity", (renderActivity2pm));
});

// 3pm
    var activity3pm=localStorage.getItem("3pmActivity");
    $("#3pm").text(activity3pm);

    $(".btnfor3").on("click", function (event) {
        var renderActivity3pm=$("#3pm").text();
        localStorage.setItem("3pmActivity", (renderActivity3pm));
        });

// 4pm
    var activity4pm=localStorage.getItem("4pmActivity");
    $("#4pm").text(activity4pm);

    $(".btnfor4").on("click", function (event) {
        var renderActivity4pm=$("#4pm").text();
        localStorage.setItem("4pmActivity", (renderActivity4pm));
    });

    // 5pm
    var activity5pm=localStorage.getItem("5pmActivity");
    $("#5pm").text(activity5pm);

    $(".btnfor5").on("click", function (event) {
        var renderActivity5pm=$("#5pm").text();
        localStorage.setItem("5pmActivity", (renderActivity5pm));
    });
});
