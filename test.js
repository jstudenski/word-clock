var a = 01
var b = 06
var c = 13

function round(x) {

	var rounded = 5 * Math.round(x/5)

	if (rounded == 0) {

	} else if (rounded == 5) {
		
	} else if (rounded == 10) {

	} else if (rounded == 15) {

	} else if (rounded == 20) {

	} else if (rounded == 25) {

	} else if (rounded == 30) {

	} else if (rounded == 35) {

	} else if (rounded == 40) {

	} else if (rounded == 45) {

	} else if (rounded == 50) {

	} else if (rounded == 55) {

	} else if (rounded == 60) {

	} else {
		console.log("invalid number")
	}

}



console.log(round(a) + "," + round(b) + "," +round(c));