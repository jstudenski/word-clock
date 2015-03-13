var a = 01
var b = 06
var c = 13

function round(x) {

	var rounded = 5 * Math.round(x/5);

}

function number_name(x) {

	numberarr = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve"];

	if (x >= 13){
	return numberarr[x - 13];

	} else {

	return numberarr[x - 1];

	}


}





console.log(number_name(13));

