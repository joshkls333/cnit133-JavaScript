/**********
HW3 - Extra Credit JavaScript File
Created by: Josh Klaus
Email: jklaus1@mail.ccsf.edu
**********/


function getrandom()
{
	return Math.floor(Math.random() * 6 + 1);
}

var n4 =0;

function rolldice()
{
	var number1, number2, number3, n1, n2, n3, roll;
	var errorMessage = "<span style='color: #000000; background-color: #FF8199;" + 
						"width: 100px;font-weight: bold; font-size: 14px;'>" +
						"Please input a numeric value</span>";

	n1 = getrandom();
	n2 = getrandom();

	document.getElementById("num1").value = n1;
	document.getElementById("num2").value = n2;

	n3 = n1 + n2;

	document.getElementById("num3").value = n3;
	
	if( isNaN(n1) || isNaN(n2))
	{
		document.getElementById("errorMsg").innerHTML = errorMessage;
	}
	else
	{
		if ( n4 > 0)
		{

			if ( n3 == n4)
			{
				document.forms["myform"].elements["result"].value  = ("Player Wins!  \You hit your point." + 
					"\nClick Roll Dice to play again.");
				n4 = 0; 
			}
			else if ( n3 == 7)
			{
				document.forms["myform"].elements["result"].value  = ("Player Loses.  \nYou hit 7 before your point. " +
					"\nClick Roll Dice to play again.");
				n4 = 0;
			}
			else
			{			
				document.forms["myform"].elements["result"].value  = ("Roll Dice. \nYour point is still: " + n4);
			}

		}
		else if (n3 == 7 || n3 == 11)
		{
			document.forms["myform"].elements["result"].value  = ("Player Wins!  Click Roll Dice to play again.");
			document.getElementById("num4").value = "";

		}
		else if (n3 == 2 || n3 == 3 || n3 == 12)
		{
			document.forms["myform"].elements["result"].value  = ("Player Loses. Click Roll Dice to play again."); 
			document.getElementById("num4").value = "";
		}
		else
		{
			document.getElementById("num4").value = n3;
			document.forms["myform"].elements["result"].value  = ("Roll Dice. Your point is: " + n3);			
			n4 = n3;
		}	
	}
	
}



