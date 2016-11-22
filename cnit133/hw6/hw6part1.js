/**********
HW6 - Part 1 JavaScript File
Created by: Josh Klaus
Email: jklaus1@mail.ccsf.edu
**********/

// Thanks to the following for assistance with the Math object:
// https://insight.ccsf.edu/mod/book/view.php?id=549650&chapterid=150038

function process() {

	var errorMessage = "<span style='color: #000000; background-color: #FF8199;" + 
						"width: 100px;font-weight: bold; font-size: 14px;'>" +
						"Input must be a valid floating point number.</span>";

	var inputNumber = parseFloat(document.getElementById("num").value);

    if ( isNaN(inputNumber) ) {
               
        document.getElementById("errorMsg").innerHTML = errorMessage;

    } else {

    	document.getElementById("output").value = "Your number: " + inputNumber +
    	    "\n The number rounded to the nearest integer using Math.round(): " + 
                Math.round( inputNumber ) +
            "\n The square root of the number rounded to nearest integer: " +
            	Math.round( Math.sqrt( inputNumber)) +
            "\n The number rounded to the nearest tenths using toFixed(): " +
             	(inputNumber.toFixed(1)) +
            "\n The number rounded to the nearest hundredths using toFixed(): " +
                (inputNumber.toFixed(2)) +
            "\n The number rounded to the nearest thousandths using toFixed(): " +
                (inputNumber.toFixed(3)) +
            "\n The number rounded to the nearest hundredths using floor method: " +
             	Math.floor(100 * inputNumber + .5) / 100 +
            "\n The number rounded to the nearest thousandths using Math.round(): " +
             	Math.round(1000 * inputNumber) / 1000 ;

	}

}
