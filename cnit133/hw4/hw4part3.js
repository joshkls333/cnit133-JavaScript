/**********
HW4 - Part 3 JavaScript File
Created by: Josh Klaus
Email: jklaus1@mail.ccsf.edu
**********/

// JQuery function to change the colors of the alternate rows



// Function to calculate compound interest

function interest()
{

  	var myTable = "";
  	var ratenumber = document.getElementById("rate");
  	var rate = parseFloat(ratenumber.value);

  	myTable += "<table id=\"interest\">" +
  				"<tr>" +
				"<th>Year</th>" +
				"<th>Amount on deposit</th>" +
				"<th>Interest Rate</th>" +
			    "</tr>"

	for ( var i = 1; i <= 10; i++ ) 
	{ 
		myTable += "<tr>" ;
		
		myTable += "<td>" + i + "</td>" ;
		myTable += "<td>" + (1000 * Math.pow(( 1 + rate ), i)).toFixed(2) + "</td>" ;
		myTable += "<td>" + rate.toFixed(2) + "</td>" ;
 		
 		myTable += "</tr>" ; 
 	}
 	myTable += "</table>";

	document.getElementById("interest").innerHTML = myTable;

}


         




