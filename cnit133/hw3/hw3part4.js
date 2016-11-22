/**********
HW3 - Part 4 JavaScript File
Created by: Josh Klaus
Email: jklaus1@mail.ccsf.edu
**********/

// JQuery function for showing instructions

$(function() {
	$( "#dialog" ).dialog({
		autoOpen: false,
		show: { effect: "clip",
				duration: 1000},

	    hide: { effect: "fold",
				duration: 1000}
	});

	$( "#opener" ).click(function() {
		$( "#dialog" ).dialog( "open" );
	});
});

// Function for checking for Palindrome
         
function process()
{
	var number, n;

	number = document.forms["myform"].elements["num"].value;

	n = parseInt(number, 10);

	var errorMessage = "<span style='color: #000; background-color: #FF8199;" + 
						"width: 100px;font-weight: bold; font-size: 14px;'>" +
						"Input must be a 5-digit Integer</span>";

	var i = 0;
	var len = number.length;

	if( isNaN(n) || len != 5)
	{
		document.getElementById("errorMsg").innerHTML = errorMessage;
	}
	else
	{
		if (number.charAt(i) == number.charAt(len-1))
		{
			if(number.charAt(i + 1) == number.charAt(len - 2))
			{
					document.forms["myform"].elements["result"].value  = (number + " is a palindrome"); 
			}
		} 
		else  
		{
			document.forms["myform"].elements["result"].value  = (number + " is NOT a palindrome");
		} 
	}
}


