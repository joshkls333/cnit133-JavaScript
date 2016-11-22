/**********
HW5 - Extra Credit JavaScript File
Created by: Josh Klaus
Email: jklaus1@mail.ccsf.edu
**********/


// Modified code found on StackOverflow
// Credit to the following:  http://jsfiddle.net/ba8Eu/4/  Although there were errors and needed some changes

$(function() {

	$( "#dialog" ).dialog({
		autoOpen: false,
		show: {
		effect: "clip",
		duration: 1000
		},

		hide: {
		effect: "fold",
		duration: 1000
		}
	});

	$( "#opener" ).click(function() {
		$( "#dialog" ).dialog( "open" );
	});
});

var seatSection, totalSeatsTaken = 0;
seatsAvailable = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


function reservation(){
    seatSection = parseInt(document.getElementById('num').value);

    if(totalSeatsTaken == seatsAvailable.length ) {
        alert("No seats available!");
        return;
    }
     
    if (seatSection == 1) {
        firstClass();
    } else if (seatSection == 2) {
        economy();
    } else {
        alert("Please enter either a 1 or a 2");;
    }
}

function firstClass() {
    var seatFound = false;
    for (var i = 0; i <= 4; i++) {
        if (seatsAvailable[i] == 0) {
            alert("been assigned to first class seat " + (i + 1));
            seatsAvailable[i] = 1;
            seatFound = true;
            totalSeatsTaken += 1;
            break;
        }
    };
    if (!seatFound ) {
    	var answer = confirm("There are no more first class seats available.  Would you like an economy class seat?") 
        if ( answer) {
        	economy();
    	} else {
    		alert("Your next flight will be in 3 hours!");
    	}
	}
}

function economy() {

    var seatFound = false;
    for (var i = 5; i <= 9; i++) {
        if (seatsAvailable[i] == 0) {
            window.alert("been assigned to economy seat " + (i + 1));
            seatsAvailable[i] = 1;
            seatFound = true;
            totalSeatsTaken += 1;
            break;

        }

    };
    if (!seatFound ) {
    	var answer = confirm("There are no more economy class seats available.  Would you like a first class seat?")
    	if ( answer ) {
        	firstClass();
    	} else {
    		alert("Your next flight will be in 3 hours!");    		
    	} 
    } 
}

