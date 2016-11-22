/**********
HW2 - Part 2 JavaScript File
Created by: Josh Klaus
Email: jklaus1@mail.ccsf.edu
**********/


function process()
{
	var number1, number2, number3, n1, n2, n3, sum;

	number1 = document.forms["myform"].elements["num1"].value;
	number2 = document.forms["myform"].elements["num2"].value;
	number3 = document.forms["myform"].elements["num3"].value;

	n1 = parseInt(number1);
	n2 = parseInt(number2);
	n3 = parseInt(number3);

	sum = n1 + n2 + n3; 
	product = n1 * n2 * n3;
	average = (n1 + n2 + n3) / 3
	maximum = Math.max(n1,n2,n3)
	minimum = Math.min(n1,n2,n3)

	document.forms["myform"].elements["result"].value  = (
		"The inputted numbers were " + n1 + ", " + n2 + ", " + n3 + 
		"\nThe sum of the integers was " + sum + 
		"\nThe product of the integers was " + product +
		"\nThe average of the integers was " + average + 
		"\nThe max of the integers was " + maximum + 
		"\nThe min of the integers was " + minimum); 

}

