
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


var notes = [];
var marked_Notes = "notes"
var blockTime = currentTime.hour
var blockText

function setBgColor(currentTime) {
    blockTime = currentTime.split("")
    blockText = textTime.split("")

    if (blockTime < blockText) {
        currentTime.addClass("past")
    } else {
        currentTime === blockTime
        currentTime.addClass("present")
    }
    if (currentTime > blockTime) {
        currentTime.addClass("future")
    }


}

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


timeBlock = document.getElementsByClassName("time-block")
function saveInput(pText, pId) {
    nBlock = {
        id: pId,
        input: pText
    }
    for (var i = 0; i < marked_Notes.length; i++) {
        if (marked_Notes[i].id === nBlock.id) {

            localStorage.setItem(marked_Notes, JSON.stringify(notes));
            return null;
        }
    }
    marked_Notes.push(nBlock)
    localStorage.setItem(marked_Notes, JSON.stringify(marked_Notes))
}
saveInput()








