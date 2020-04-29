$(document).ready(function () {
    var notes = [9, 10, 11, 12, 13, 14, 15, 16, 17];
    var marked_Notes = "notes"
    var now = moment().format("MM" + "/" + "DD" + "/" + "YYYY");
    $("#currentDay").text(now);

    var hourEl = moment().get("hour");

    $(".hour").each(function () {
        var timeIndex = parseInt($(this).attr("value"));
        if (timeIndex < hourEl) {
            $(this).addClass("past");
        }
        if (timeIndex === hourEl) {
            $(this).addClass("present");
        }
        if (timeIndex > hourEl) {
            $(this).addClass("future");
        }




    });

    for (var i = 0; i < notes.length; i++) {
        if (notes === marked_Notes) {
            localStorage.setItem(marked_Notes)
        }
    }
    $(".saveBtn").on("click", function (event) {

        var clicked = $(event).prev().val()
        var notes = JSON.stringify($(clicked).prev().val());
        localStorage.setItem(notes, clicked);

    })

    localStorage.getItem(JSON.parse("marked_Notes"))


});