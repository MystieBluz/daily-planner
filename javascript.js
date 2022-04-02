// Current Date and Time in Header
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do YYYY, h:mm a"));


// Colored Time Blocks for Past, Present and Future
function colorTimeBlock() {
    var currentTimeBlock = moment().hour();
    $(".time-block").each(function () {
        
    })
}
