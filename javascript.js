// Current Date in Header
$("#currentDay").text(moment().format("dddd, MMMM Do"));


    
    function currentTime(){
        // Timeblocks for specific time are color coded to indicate Past(Grey), Present(Red) or Future(Green)
        $(".time-block").each(function(){
            var colorTimeBlock = parseInt($(this).attr("id").replace("hour",""));
            console.log("colorTimeBlock", colorTimeBlock)
            var activeTime = parseInt(moment().format("h"));
            console.log("activeTime", activeTime)
            
            if(colorTimeBlock < activeTime){
                $(this).addClass("past");
                $(this).removeClass("present")
                $(this).removeClass("future")
            } else if (colorTimeBlock > activeTime){
                $(this).addClass("future");
                $(this).removeClass("past")
                $(this).removeClass("present")
            } else {
                $(this).addClass("present")
                $(this).removeClass("past")
                $(this).removeClass("future")
            }
        })

       
    }

    // Calls Function
    currentTime();

     // Save Button for Input in Text Area
     $(".saveBtn").on("click", function (){
        var input = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Save Input in Local Storage
        localStorage.setItem(time, input);
    })

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

    
