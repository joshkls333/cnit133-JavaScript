/**********
HW2 - Part 4 JavaScript File
Created by: Josh Klaus
Email: jklaus1@mail.ccsf.edu
**********/

         
function process()
{

	// Set the htmlOutput variable to a string that contains an HTML table

	var htmlOutput = "";

	var n1 = 7;

	htmlOutput += "<table class=\"main\">";

	htmlOutput += "<tr class=\"headers\"><th>Number</th><th>Square</th><th>Cube</th></tr>";

	htmlOutput += "<tr><td>" + n1 + "</td><td>" + Math.pow(n1,2) + "</td><td>" + Math.pow(n1,3) +"</td></tr>";
	n1 += 1;

	htmlOutput += "<tr><td>" + n1 + "</td><td>" + Math.pow(n1,2) + "</td><td>" + Math.pow(n1,3) +"</td></tr>";
	n1 += 1;

	htmlOutput += "<tr><td>" + n1 + "</td><td>" + Math.pow(n1,2) + "</td><td>" + Math.pow(n1,3) +"</td></tr>";
	n1 += 1;

	htmlOutput += "<tr><td>" + n1 + "</td><td>" + Math.pow(n1,2) + "</td><td>" + Math.pow(n1,3) +"</td></tr>";

	htmlOutput += "</table>";

	// Set the contents of the <div> block to the contents of htmlOutput

	document.getElementById("nextTable").innerHTML = htmlOutput;

}
