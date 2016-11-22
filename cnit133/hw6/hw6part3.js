/**********
HW6 - Part 3 JavaScript File
Created by: Josh Klaus
Email: jklaus1@mail.ccsf.edu
**********/

// Thanks to the following for providing some direction in writing this code:
// https://fog.ccsf.edu/~srubin/obj2sol.html


$(document).ready(function(){
	jQuery(function($){
	   $("#phone").mask("(999) 999-9999");
	});
});

function splitPhoneNumber() {

	if($("#splitForm").valid()) {
		var phoneNumber = $('#phone').val();

		var tokens = phoneNumber.split( ' ' );

		var tokens2 = tokens[1].split( '-' );

		$('#areaCode').val(tokens[0].substr(1,3));
		$('#phonePrefix').val(tokens2[0]);
		$('#phoneNumber').val(tokens2[0] + '-' + tokens2[1]);
		$('#fullphone').val(tokens[0] + ' ' + tokens2[0] + '-' + tokens2[1]);
		
	} else {
		return false;
	}
}

         




