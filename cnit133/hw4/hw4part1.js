/**********
HW4 - Part 1 JavaScript File
Created by: Josh Klaus
Email: jklaus1@mail.ccsf.edu
**********/

// JQuery function for Dragging elements

$( function() {
	$( "#draggable" ).draggable();
} );


// Function for calculating grades
         
function calculate()
{
	var prod = 0;
	var num = 5;
	var sum = 0;
	var sumtext = "";
	var prodtext = "";
	var prodtotal = 1;

	for(i = 5; i <= 20; i += 3)
	{
		prod = i * prodtotal;
		prodtotal =  prod;

		if( i < 20)
		{
			prodtext +=  i + " * ";      
		}
		else
		{
			prodtext += i + " = " + prodtotal.toLocaleString();
		}
		
	}
	
	for(i = 5; i <= 20; i += 3)
	{
		sum += i;

		if( i < 20)
		{
			sumtext +=  i + " + ";      
		}
		else
		{
			sumtext += i + " = " + sum;
		}
		
	}

	var sumtext2 = "";
	var prodtext2 = "";
	var num2 = 3;
	var sum2 = 0;

	do
	{
		sum2 += num2;

		if( num2 < 31)
		{
			sumtext2 +=  num2 + " + ";      
		}
		else
		{
			sumtext2 += num2 + " = " + sum2;
		}

	num2 += 4;
	}
	while(num2 <= 31);

	var num3 = 3;
	var num4;
	var prod2 = 0;
	prod2total = 1;

	do
	{
		prod2 = num3 * prod2total;
		prod2total = prod2;
	
		if( num3 < 31)
		{
			prodtext2 +=  num3 + " * ";      
		}
		else
		{
			prodtext2 += num3 + " = " + prod2total.toLocaleString();
		}

	num3 += 4;	
	}
	while(num3 <= 31);


	document.getElementById("sum").innerHTML = sumtext;
 
	document.getElementById("product").innerHTML = prodtext;

	document.getElementById("sum2").innerHTML = sumtext2;
 
	document.getElementById("product2").innerHTML = prodtext2;

    document.forms["myform"].elements["result"].value =  ( "Sum of every third integer from 5 to 20: " + sum +
    													   "\n\nProduct of every third integer from 5 to 20: " + prodtotal.toLocaleString() +
    													   "\n\nSum of every fourth integer from 3 to 31: "  + sum2 +
    													   "\n\nProduct of every fourth integer from 3 to 31: "  + prod2total.toLocaleString());
    
  
	
}




