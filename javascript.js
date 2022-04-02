// Current Date and Time in Header
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do YYYY, h:mm a"));

$(document).ready(function (){
    // Save Button for Input in Text Area
    $(".saveBtn").on("click", function (){
        var input = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Save Input in Local Storage
        localStorage.setItem(time, input);
    })

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
    }

    
})