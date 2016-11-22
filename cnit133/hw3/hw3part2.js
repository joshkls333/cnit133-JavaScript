/**********
HW3 - Part 2 JavaScript File
Created by: Josh Klaus
Email: jklaus1@mail.ccsf.edu
**********/

// JQuery function for showing a tooltip

$( function() {
	$( document ).tooltip();
});	

// Function for displaying Sales Comissions
     
function salestotal()
{
	var item1num, item2num, item3num, item4num, item1, item2, item3, item4;
	var item1total, item2total, item3total, item4total, total, salary;

	var errorMessage = "<span style='color: #000000; background-color: #FF8199;" + 
						"width: 100px;font-weight: bold; font-size: 14px;'>" +
						"Input must be integers</span>";

	item1 = document.forms["salesperson_form"].elements["item1"].value;
	item2 = document.forms["salesperson_form"].elements["item2"].value;
	item3 = document.forms["salesperson_form"].elements["item3"].value;
	item4 = document.forms["salesperson_form"].elements["item4"].value;


	item1num = parseInt(item1, 10);
	item2num = parseInt(item2, 10);
	item3num = parseInt(item3, 10);
	item4num = parseInt(item4, 10);

	if( isNaN(item1num) || isNaN(item2num) || isNaN(item3num) || isNaN(item4num) )
    {
    	document.getElementById("errorMsg").innerHTML = errorMessage;      
    }
  	else 
  	{
		document.forms["salesperson_form"].elements["item1_num"].value =  item1num;
		document.forms["salesperson_form"].elements["item2_num"].value =  item2num;
		document.forms["salesperson_form"].elements["item3_num"].value =  item3num;
		document.forms["salesperson_form"].elements["item4_num"].value =  item4num;
	}
	item1total = item1num * 239.99;
	item2total = item2num * 129.75;
	item3total = item3num * 99.95;
	item4total = item4num * 350.89;
	
	document.forms["salesperson_form"].elements["item1_total"].value =  item1total.toFixed(2);
	document.forms["salesperson_form"].elements["item2_total"].value =  item2total.toFixed(2);
	document.forms["salesperson_form"].elements["item3_total"].value =  item3total.toFixed(2);
	document.forms["salesperson_form"].elements["item4_total"].value =  item4total.toFixed(2);

	total = item1total + item2total + item3total + item4total;

	document.forms["salesperson_form"].elements["items_total"].value =  total.toFixed(2);

	salary = 200 + (total * .09);

	document.forms["salesperson_form"].elements["salary"].value =  salary.toFixed(2);
	
}




