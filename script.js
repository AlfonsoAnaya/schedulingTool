let noWeeks = 4;
let scheduleGrid = document.getElementById("schedule")

for (let i=0; i < noWeeks *7; i++) {
    let dayDiv = document.createElement("div");
    dayDiv.classList.add("day")
    if (i%6 == 0) {
        dayDiv.classList.add("weekend");
    } else {
        dayDiv.classList.add("weekday");
    }
    scheduleGrid.appendChild(dayDiv);
}