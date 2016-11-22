/**********
HW4 - Extra Credit JavaScript File
Created by: Josh Klaus
Email: jklaus1@mail.ccsf.edu
**********/

// JQuery for validation displays error message if form input is not a number


$(document).ready(function(){
    $("#myform").validate({
	  // Rules for each input item
	  rules: 
	  {
		num: { required: true, number: true, min: 2, max: 10}
	  }
	});	  
});


function process()
{

	if( $("#myform").valid())
	{

		var n, num, row, column, boxofstars;

		num = document.getElementById("num").value;

		// num = parseInt(n);

		boxofstars = "<pre>";

		for(row = 1; row <= num; row ++)
		{
			boxofstars +=  "* " ;

			for( column = 2; column <= num; column ++)
			{
				if ( column == num || row == 1 || row == num)
				{
					boxofstars += "* ";
				}
				else
				{
					boxofstars += "  ";
				}
			}
			boxofstars += "<br>";
		}
		boxofstars += "</pre>"

		document.getElementById("boxarea").innerHTML = boxofstars;
	}
}





function process()
{


	// var errorMessage = "<span style='color: #000000; background-color: #FF8199;" + 
						// "width: 100px;font-weight: bold; font-size: 14px;'>" +
						// "Please input a numeric value between 2 and 10</span>";


	if( $("#myform").valid())
	{

		var n, num, row, column, boxofstars;

		num = document.getElementById("num").value;

		// num = parseInt(n);

		boxofstars = "<pre>";

		for(row = 1; row <= num; row ++)
		{
			boxofstars +=  "* " ;

			for( column = 2; column <= num; column ++)
			{
				if ( column == num || row == 1 || row == num)
				{
					boxofstars += "* ";
				}
				else
				{
					boxofstars += "  ";
				}
			}
			boxofstars += "<br>";
		}
		boxofstars += "</pre>"

		document.getElementById("boxarea").innerHTML = boxofstars;
	}
}


