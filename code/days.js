const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"]
var text = "";

function startUp() {
    var d = new Date();
    var n = d.getDay();
    for (var i = n; i-n < 7; i++) {
    text += '<div class="daybox"><div class="dayname">' + days[i%7] + " 7:00" + '</div><div class="schedule"></div></div>';
    }
console.log(text);
document.getElementById("daysAndNav").innerHTML = text;
}