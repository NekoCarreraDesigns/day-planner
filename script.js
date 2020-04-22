$(document).ready(function () {
    var notes = [];
    var now = inTheNow().format("mm dd yyyy");
    $("#currentDay").text(Now);

    var hourEl = inTheNow().get("hour");

    $(".hour").each(function () {
        var timeIndex = parseInt($(this).attr("value"));
        if (timeIndex < hourEl) {
            $(this).addClass(".past");
        }
        if (timeIndex === hourEl) {
            $(this).addClass(".present")
        }
        if (timeIndex > hourEl) {
            $(this).addClass(".future")
        }

    }

    )
});

$(".saveBtn").click(function (event) {
    var valueAttr = ("data-hour").val();
    var notes = JSON.parse(window.localStorage.getItem("#description"));
    alert("Save Button Clicked")
})


function copyText() {
    var copied = $("#description");

    copied.select();
    document.execCommand("copy");

    return copied;
}
$(".saveBtn").on("click", function () {
    $("teaxtarea(name*=" + id + "").select();
    document.execCommand("copy");
    $("textarea").select();

    document.execCommand("copy");


})