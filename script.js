 
// add periods.


$(document).ready(function () {

// $("body").append("<p>test</p>");

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


    function number_name(x) {
        numberarr = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"];
        if (x >= 13){
        return numberarr[x - 13];
        } else {
        return numberarr[x - 1];
        }
    }

    if (m_rounded == 0) {
        document.getElementById('time').innerHTML = number_name(h);
    } else if (m_rounded == 5) {
        document.getElementById('time').innerHTML = "five past  " + number_name(h);
    } else if (m_rounded == 10) {
        document.getElementById('time').innerHTML = "ten past " + number_name(h);
    } else if (m_rounded == 15) {
        document.getElementById('time').innerHTML = "quarter past " + number_name(h);
    } else if (m_rounded == 20) {
        document.getElementById('time').innerHTML = "twenty past " + number_name(h);
    } else if (m_rounded == 25) {
        document.getElementById('time').innerHTML = "twenty five past " + number_name(h);
    } else if (m_rounded == 30) {
        document.getElementById('time').innerHTML = "half past " + number_name(h);
    } else if (m_rounded == 35) {
        document.getElementById('time').innerHTML = "twenty five to " + number_name(h+1);
    } else if (m_rounded == 40) {
        document.getElementById('time').innerHTML = "twenty to " + number_name(h+1) + ".";
    } else if (m_rounded == 45) {
        document.getElementById('time').innerHTML = "quarter to " + number_name(h+1);
    } else if (m_rounded == 50) {
        document.getElementById('time').innerHTML = "ten to " + number_name(h+1);
    } else if (m_rounded == 55) {
        document.getElementById('time').innerHTML = "five to " + number_name(h+1);
    } else if (m_rounded == 60) {
        document.getElementById('time').innerHTML = number_name(h+1);
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