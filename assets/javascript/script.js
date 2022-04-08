// Display current date with time 
function displayDayTime() {
    var todayDate = moment().format('dddd, MMMM Do YYYY h:mm:ss A');
    $("#currentDay").html(todayDate);
}
setInterval(displayDayTime, 1000);

// descriptions to hold client data
// button function to save in the local storage
$(".saveBtn").on("click", function() {
    var time = $(this).parent().attr("id");
    var text = $(this).siblings(".description").val();

    localStorage.setItem(time, text);
});
$("#8 .description").val(localStorage.getItem("8"));
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));

$(".eraseBtn").on("click", function() {
    var time = $(this).parent().attr("id");
    var text = $(this).siblings(".description").val();

    localStorage.removeItem(time, text);

    $("#8 .description").val(localStorage.getItem("8"));
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));
});
// past current an future colors
function colors() {
    var currentHour = moment().hour();

    var timeBlock = $(".time-block")
    timeBlock.each(function() {
        var eachHour = parseInt($(this).attr("id"));
        if (currentHour > eachHour) {

            $(this).children(".description").addClass("past");

        } else if (currentHour === eachHour) {

            $(this).children(".description").removeClass("past");
            $(this).children(".description").addClass("present");
        } else {
            $(this).children(".description").removeClass("past");
            $(this).children(".description").removeClass("present");
            $(this).children(".description").addClass("future");
        }
    });
}

colors();