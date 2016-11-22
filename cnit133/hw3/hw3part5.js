/**********
HW3 - Part 5 JavaScript File
Created by: Josh Klaus
Email: jklaus1@mail.ccsf.edu
**********/


var errorMessage = "<span style='color: #000000; background-color: #FF8199;" + 
						"width: 100px;font-weight: bold; font-size: 14px;'>" +
						"Please input a numeric value</span>";
         
function celsius()
{
	var number, n;

	number = document.forms["myform"].elements["num"].value;

	n = parseInt(number, 10);
		
	if( isNaN(n))
	{
		document.getElementById("errorMsg").innerHTML = errorMessage;
	}
	else
	{
		C = 5/9 * (n - 32) 
		
		document.forms["myform"].elements["result"].value  = ("The temperature is " + C + " degrees Celsius"); 
	}
	
}

function fahrenheit()
{
	var number, n;

	number = document.forms["myform"].elements["num"].value;

	n = parseInt(number, 10);
		
	if( isNaN(n))
	{
		document.getElementById("errorMsg").innerHTML = errorMessage;
	}
	else
	{
		F = (9/5 * n) + 32
		
		document.forms["myform"].elements["result"].value  = ("The temperature is " + F + " degrees Fahrenhiet"); 
	}
	
}


