/**********
HW3 - Part 1 JavaScript File
Created by: Josh Klaus
Email: jklaus1@mail.ccsf.edu
**********/

// JQuery function for Showing Instructions

$(document).ready(function()
{
	$("#flip").click(function()
	{
		$("#panel").slideToggle("slow");
	});
	
});

// Function for calculating grades
         
function grades()
{
	var hwavg, mtexam, finalexam, acravg, finalavg, grade;
	
	var errorMessage = "<span style='color: #000000; background-color: #FF8199;" + 
						"width: 100px;font-weight: bold; font-size: 14px;'>" +
						"Input must be integers between 0 and 100</span>";

	hwavg = document.forms["myform"].elements["hwavg"].value;
	mtexam = document.forms["myform"].elements["midterm"].value;
	finalexam = document.forms["myform"].elements["finalexam"].value;
	acravg = document.forms["myform"].elements["acravg"].value;

	hwnum = parseInt(hwavg, 10);
	mtnum = parseInt(mtexam, 10);
	finnum = parseInt(finalexam, 10);
	acrnum = parseInt(acravg, 10);


	if( isNaN(hwnum) || isNaN(mtnum) || isNaN(finnum) || isNaN(acrnum) || 
		hwnum < 0 || mtnum < 0 || finnum < 0 || acrnum < 0 || 
		hwnum > 100 || mtnum > 100 || finnum > 100 || acrnum > 100)
    {
    	document.getElementById("errorMsg").innerHTML = errorMessage;      
    }
  	else 
  	{

		finalavg = (.5 * hwnum) + (.2 * mtnum) + (.2 * finnum) + (.1 * acrnum);

		if(finalavg >= 90) 
			{grade = "A";}
		else if (finalavg >= 80 && finalavg < 90) 
			{grade = "B";}
		else if (finalavg >= 70 && finalavg < 80) 
			{grade = "C";}
		else if (finalavg >= 60 && finalavg < 70) 
			{grade = "D \nStudent will need to retake the course";}
		else if (finalavg < 60)
			{grade = "F \nStudent will need to retake the course";}
 
    	document.forms["myform"].elements["result"].value =  ( "Final Average: " + finalavg.toFixed(0) +
    		"\nFinal Grade: " + grade);
    }

  
	
}




