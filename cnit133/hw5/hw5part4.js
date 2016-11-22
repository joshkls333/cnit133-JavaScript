/**********
HW5 - Part 4 JavaScript File
Created by: Josh Klaus
Email: jklaus1@mail.ccsf.edu
**********/

// Modified solution found in Coding Exercises - Arrays
// Credit to https://insight.ccsf.edu/mod/book/view.php?id=549644&chapterid=150032

 
// Declare and initialize global variables
var numbersArray, output, count;
var errorMessage = "<span style='color: #000000; background-color: #FF8199;" + 
						"width: 100px;font-weight: bold; font-size: 14px;'>" +
						"Input must be a valid number between 10 and 100.</span>";

function init() {
	numbersArray = [];
	output = "";
	count = 0;
	return true;
}

function process() {

	var inputNumber = parseInt(document.getElementById("num").value, 10);

	if (inputNumber < 10 || inputNumber > 100 || isNaN(inputNumber)) {
		document.getElementById("errorMsg").innerHTML = errorMessage;
		setFocus();
	return false;
	} else {
		document.getElementById("errorMsg").innerHTML = "";

	}

	var found = false;
	for (var i = 0; i < numbersArray.length; i++) {
		if (numbersArray[i] == inputNumber) {
    	found = true;
    	break;
		}
	}

	if (!found) {
		numbersArray.push(inputNumber);
		output += inputNumber + " ";
	}

	count++;

	if(count < 10){
		document.getElementById("output").value = "Count of items entered: " + count + "\nResult: " + output;
		document.getElementById("num").select();
		document.getElementById("num").focus();
	} else {
		document.getElementById("output").value = "Count of items entered: " + count + "\nResult: " + output;
		alert("You have entered 10 numbers! After you submit this number your next will reset the list!");
		init();
	}

	return false;
}



