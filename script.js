
var currentTime = new Date();
var day = currentTime.getDate();
var month = currentTime.getMonth() + 1;
var year = currentTime.getFullYear();
if (day < 10) {
    day = "0" + day;
}
if (month < 10) {
    month = "0" + month;
}
var todayDate = month + "/" + day + "/" + year;
document.getElementById("currentDay").innerText = todayDate
function startTime() {

    ap = "am";
    hour = currentTime.getHours();
    minute = currentTime.getMinutes();
    second = currentTime.getSeconds();
    document.getElementById("currentDay").innerHTML = hour + ":" + minute + ":" + second + ap + ""

    if (hour > 11) {
        ap = "pm";
    }
    if (hour > 12) {
        hour = hour - 12;
    }
    if (hour === 0) {
        hour = 12;
    }
    if (minute < 10) {
        minute = "0" + minute;
    }
    if (second < 10) {
        second = "0" + second;
    }
    document.getElementById("currentDay").innerHTML = hour + ":" + minute + ":" + second + ap + ""
    t = setTimeout(500);
}
var timeBlock = currentTime.hour
function textBar() {
    var timeIndex = parseInt(this).attr("value")
    if (timeIndex < timeBlock) {
        setStatusClass(document.timeBlock, past);
    }
    if (timeIndex === timeBlock) {
        setStatusClass(document.textarea, present);
    }
    if (timeIndex > timeBlock) {
        setStatusClass(document.textarea, future);
    }
}
var notes = [];
localStorage.setItem("notes", "user")
console.log(notes)









