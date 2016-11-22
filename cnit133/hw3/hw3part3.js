/**********
HW3 - Part 3 JavaScript File
Created by: Josh Klaus
Email: jklaus1@mail.ccsf.edu
**********/

// JQuery function for changing CSS for the TextArea results

$(document).ready(function(){
    $('#cssmod').click(function(){
        $("#mytextarea").css({
            "color": "#FFFFFF",
            "background-color": "#000000",
            "font-weight": "bold",
            "font-size": "16px"
        });
    });
});

// Function to check for balance and credit limit
         
function creditlimit()
{
	var accountnum, creditlimit, begbalance, amtcharged, amtcredit, balance, credit;
	var n1, n2, n3, n4, n5;

	var errorMessage = "<span style='color: #000000; background-color: #FF8199;" + 
						"width: 100px;font-weight: bold; font-size: 14px;'>" +
						"Input must be a valid Float</span>";

	var noAccount = "<span style='color: #000000; background-color: #FF8199;" + 
						"width: 100px;font-weight: bold; font-size: 14px;'>" +
						"You must input your Account Number</span>";

	n1 = document.forms["myform"].elements["account_num"].value;
	n2 = document.forms["myform"].elements["credit_limit"].value;
	n3 = document.forms["myform"].elements["beg_balance"].value;
	n4 = document.forms["myform"].elements["account_charged"].value;
	n5 = document.forms["myform"].elements["account_credits"].value;


	accountnum = parseFloat(n1);
	creditlimit = parseFloat(n2);
	begbalance = parseFloat(n3);
	amtcharged = parseFloat(n4);
	amtcredit = parseFloat(n5);

	balance = (begbalance + amtcharged - amtcredit);

	credit = creditlimit - balance;

	if( isNaN(accountnum))
	{
		document.getElementById("errorMsg").innerHTML = noAccount;
	}
	else if( isNaN(creditlimit) || isNaN(begbalance) || isNaN(amtcharged) || isNaN(amtcredit) )
    {
    	document.getElementById("errorMsg").innerHTML = errorMessage;      
    }
    else
    {
    	if(balance < creditlimit)
		{
			document.forms["myform"].elements["result"].value  = (
				"The new balance is: $" + balance +
				"\nThe credit limit is: $" + credit );
		}
		else
		{
			document.forms["myform"].elements["result"].value  = (
				"The new balance is: $" + balance + 
				"\nYou have exceeded your credit limit by: $" + Math.abs(credit) ); 
		}
    }
}




