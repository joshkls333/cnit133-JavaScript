/**********
HW4 - Part 2 JavaScript File
Created by: Josh Klaus
Email: jklaus1@mail.ccsf.edu
**********/


// Function for displaying Sales Comissions
     

function grosspay()
{
	var hourlyrate, hoursworked, rate, hours, grosspay, i;

	var errorMessage = "<span style='color: #000000; background-color: #FF8199;" + 
						"width: 100px; height: 20px; font-weight: bold; font-size: 18px;'>" +
						"Input must be a number</span>";

	for( i = 1; i <= 6 ; i ++)
	{
		hoursworked = document.forms["gross_pay"].elements["hours" + i].value;
		hours = parseFloat(hoursworked);

		if( isNaN(hours) )
	    {
	    	document.getElementById("errorMsg").innerHTML = errorMessage;      
	    }
	  	else 
	  	{
			document.forms["gross_pay"].elements["f_hours" + i].value =  hours;
		}

		hourlyrate = document.forms["gross_pay"].elements["rate" + i].value;

		rate = parseFloat(hourlyrate);

		if( isNaN(rate) )
	    {
	    	document.getElementById("errorMsg").innerHTML = errorMessage;      
	    }
	  	else 
	  	{
			document.forms["gross_pay"].elements["f_rate" + i].value =  rate;
		}

		if(hours > 40)
		{
			grosspay = (40 * hourlyrate) + (hours - 40) * (hourlyrate * 1.5)
		}
		else
		{
			grosspay = hours * hourlyrate
		}

		document.forms["gross_pay"].elements["gross" + i].value =  grosspay.toFixed(2);
	}

}


