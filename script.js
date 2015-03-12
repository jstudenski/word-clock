 
$(document).ready(function () {

  $("body").append("<p>test</p>");

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);

    m_rounded = 5 * Math.round(m/5)

    if (m_rounded == 0) {

    } else if (m_rounded == 5) {
    document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
    } else if (m_rounded == 10) {
    document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
    } else if (m_rounded == 15) {
    document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
    } else if (m_rounded == 20) {

    } else if (m_rounded == 25) {

    } else if (m_rounded == 30) {

    } else if (m_rounded == 35) {

    } else if (m_rounded == 40) {

    } else if (m_rounded == 45) {

    } else if (m_rounded == 50) {

    } else if (m_rounded == 55) {

    } else if (m_rounded == 60) {

    } else {
        console.log("invalid number")
    }

    // document.getElementById('time').innerHTML = h + ":" + m + ":" + s + " m_rounded:" + m_rounded;

    t = setTimeout(function () {
        startTime()
    }, 500);
}

startTime();


});