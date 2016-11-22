/**********
HW2 - Part 3 JavaScript File
Created by: Josh Klaus
Email: jklaus1@mail.ccsf.edu
**********/

         
function process()
{
	var number1, number2, number3, number4, number5, n1, n2, n3, n4, n5;

	number1 = document.forms["myform"].elements["num1"].value;
	number2 = document.forms["myform"].elements["num2"].value;
	number3 = document.forms["myform"].elements["num3"].value;
	number4 = document.forms["myform"].elements["num4"].value;
	number5 = document.forms["myform"].elements["num5"].value;

	n1 = parseInt(number1);
	n2 = parseInt(number2);
	n3 = parseInt(number3);
	n4 = parseInt(number4);
	n5 = parseInt(number5);
		
	var i = 0;
	var numbers = [n1, n2, n3, n4, n5];
	var len = numbers.length;
	var positive = 0;
	var negative = 0;
	var zeros = 0;

	
	for( i; i< len; i++)
	{
		if (numbers[i] > 0)
		{
			positive += 1;
		} 
		else if (numbers[i] < 0) 
		{
			negative += 1;
		} 
		else if (numbers[i] == 0)
		{
			zeros += 1;
		}
	}

	document.forms["myform"].elements["result"].value  = (
		"The number of negative numbers: " + negative + 
		"\nThe number of positive numbers: " + positive + 
		"\nThe number of zero numbers: " + zeros ); 

}


