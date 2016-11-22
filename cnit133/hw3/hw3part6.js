/**********
HW3 - Part 6 JavaScript File
Created by: Josh Klaus
Email: jklaus1@mail.ccsf.edu
**********/


function getrandom()
{
	return Math.floor(Math.random() * 10);
}

window.onload = function() 
{

	document.getElementById("num1").value = getrandom();
	document.getElementById("num2").value = getrandom();

};
         
function multiply()
{
	var number1, number2, number3, n1, n2, n3;
	var errorMessage = "<span style='color: #000000; background-color: #FF8199;" + 
						"width: 100px;font-weight: bold; font-size: 14px;'>" +
						"Please input a numeric value</span>";

	number1 = document.forms["myform"].elements["num1"].value;
	number2 = document.forms["myform"].elements["num2"].value;

	number3 = document.forms["myform"].elements["num3"].value;

	n1 = parseInt(number1);
	n2 = parseInt(number2);
	n3 = parseInt(number3);
	
	if( isNaN(n1) || isNaN(n2) || isNaN(n3))
	{
		document.getElementById("errorMsg").innerHTML = errorMessage;
	}
	else
	{
		if ((n1 * n2) == n3)
		{
			document.getElementById("resultMsg").innerHTML = ("");
			var response = confirm("Very Good!  Would you like to try again?"); 
			if (response == true)
			{
				document.forms["myform"].elements["num3"].value  = ("");
				document.forms["myform"].elements["num3"].focus();

				window.location.reload();
			}
			else
			{
				return;
			}

		}
		else
		{
			document.getElementById("resultMsg").innerHTML = ("No. Please try again.");
			document.forms["myform"].elements["num3"].value  = ("");
			document.forms["myform"].elements["num3"].focus();
		}	
	}
	
}



