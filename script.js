
var currentTime = new Date();
var day = currentTime.getDate();
var month = currentTime.getMonth() + 1;
var year = currentTime.getFullYear();
var hour = currentTime.getHours();
if (day < 10) {
    day = "0" + day;
}
if (month < 10) {
    month = "0" + month;
}
var todayDate = month + "/" + day + "/" + year;
document.getElementById("currentDay").innerHTML = todayDate;





var notes = [9, 10, 11, 12, 13, 14, 15, 16, 17];

for (var i = 0; i < notes.length; i++) {

}



var saveButton9 = document.getElementById("9")

var saveButton10 = document.getElementById("10")

var saveButton11 = document.getElementById("11")

var saveButton12 = document.getElementById("12")

var saveButton1 = document.getElementById("13")

var saveButton2 = document.getElementById("14")

var saveButton3 = document.getElementById("15")

var saveButton4 = document.getElementById("16")

var saveButton5 = document.getElementById("17")



saveButton9.addEventListener("click", saveInput)


saveButton10.addEventListener("click", saveInput)


saveButton11.addEventListener("click", saveInput)


saveButton12.addEventListener("click", saveInput)


saveButton1.addEventListener("click", saveInput)


saveButton2.addEventListener("click", saveInput)


saveButton3.addEventListener("click", saveInput)


saveButton4.addEventListener("click", saveInput)


saveButton5.addEventListener("click", saveInput)


var timeBlock = document.getElementsByClassName("time-block")
function saveInput() {
    if (!inputLocalStorage()) {
        return false;
    }
    notes = timeBlock.value
    localStorage["stored.notes"] = notes



}

saveInput();

function inputLocalStorage() {
    return ("localStorage" in window) && window["localStorage"] !== null;
}








