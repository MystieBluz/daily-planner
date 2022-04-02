// Current Date and Time in Header
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do YYYY, h:mm a"));

$(document).ready(function (){
    
    // Timeblocks for specific time are color coded to indicate Past, Present or Future
    function currentTime(){
        var activeTime = moment().hour();

        $(".time-block").each(function (){
            var colorTimeBlock = parseInt($(this).attr("id").split("hour")[1]);

            if (colorTimeBlock < activeTime) {
                $(this).addClass("past");
                $(this).removeClass("present");
                $(this).removeClass("future");
            }
            else if (colorTimeBlock === activeTime) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        })

        // Save Button for Input in Text Area
    $(".saveBtn").on("click", function (){
        var input = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Save Input in Local Storage
        localStorage.setItem(time, input);
    })

    }

    // Local Storage
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#1 .description").val(localStorage.getItem("1"));
    $("#2 .description").val(localStorage.getItem("2"));
    $("#3 .description").val(localStorage.getItem("3"));
    $("#4 .description").val(localStorage.getItem("4"));
    $("#5 .description").val(localStorage.getItem("5"));



    currentTime();

})