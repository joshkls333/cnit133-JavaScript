/**********
HW4 - Part 4 JavaScript File
Created by: Josh Klaus
Email: jklaus1@mail.ccsf.edu
**********/

// Function for calculating total price of products purchased
         
function process()
{
	var errorMessage = "<span style='color: #000000; background-color: #FF8199;" + 
						"width: 100px; height: 20px; font-weight: bold; font-size: 18px;'>" +
						"Qty input must be a number</span>";

	var sumtotal = 0;

	for (var i =1; i <=5; i ++)
	{
		var n = document.forms["salesform"].elements["qty" + i].value;
		var qty = parseFloat(n)
		var productnum = document.getElementById("prod" + i).value;
		var productprice = 0;
	
		switch ( productnum )
			{
				case "1":
					productprice = 2.98;
					break;
				case "2":
					productprice = 4.50;
					break;
				case "3":
					productprice = 9.98;
					break;
				case "4":
					productprice = 4.49;
					break;
				case "5":
					productprice = 6.87;
					break;

			}
		
		if( isNaN(qty) )
	    {
	    	document.getElementById("errorMsg").innerHTML = errorMessage;      
	    }
	  	else 
	  	{
			var total = productprice * qty;
			document.forms["salesform"].elements["a" + i].value = total.toFixed(2);
			sumtotal += total;
		}	
	}
	document.forms["salesform"].elements["ts"].value = sumtotal.toFixed(2);	
}


