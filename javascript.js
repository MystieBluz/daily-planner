// Current Date and Time in Header
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do YYYY, h:mm a"));

$(document).ready(function (){
    
    function currentTime(){
        // Timeblocks for specific time are color coded to indicate Past, Present or Future
        var activeTime = moment().hour();
        $(".time-block").each(function (){
            var colorTimeBlock = parseInt($(this).attr("id").split("hour"));

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
            else  {
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
    $("#9AM .description").val(localStorage.getItem("9AM"));
    $("#10AM .description").val(localStorage.getItem("10AM"));
    $("#11AM .description").val(localStorage.getItem("11AM"));
    $("#12PM .description").val(localStorage.getItem("12PM"));
    $("#1PM .description").val(localStorage.getItem("1PM"));
    $("#2PM .description").val(localStorage.getItem("2PM"));
    $("#3PM .description").val(localStorage.getItem("3PM"));
    $("#4PM .description").val(localStorage.getItem("4PM"));
    $("#5PM .description").val(localStorage.getItem("5PM"));

    // Calls Function
    currentTime();

})