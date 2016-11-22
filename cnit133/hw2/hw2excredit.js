/**********
HW2 - Extra Credit JavaScript File
Created by: Josh Klaus
Email: jklaus1@mail.ccsf.edu
**********/

         
function populate()
{
	var number1, number2, number3, number4, number5, number6, n1, n2, n3, n4, n5, n6;

	number1 = document.forms["myform"].elements["rate1"].value;
	number2 = document.forms["myform"].elements["rate2"].value;
	number3 = document.forms["myform"].elements["rate3"].value;
	number4 = document.forms["myform"].elements["rate4"].value;
	number5 = document.forms["myform"].elements["rate5"].value;
	number6 = document.forms["myform"].elements["num6"].value;

	n1 = parseFloat(number1);
	n2 = parseFloat(number2);
	n3 = parseFloat(number3);
	n4 = parseFloat(number4);
	n5 = parseFloat(number5);
	n6 = parseFloat(number6);

	var pound;
	var candollar;
	var euro;
	var yen;
	var peso;
	
	pound = n6 * n1;
	candollar = n6 * n2;
	euro = n6 * n3;
	yen = n6 * n4;
	peso = n6 * n5;

	document.forms["myform"].elements["num1"].value = pound.toFixed(2);
	document.forms["myform"].elements["num2"].value = candollar.toFixed(2);
	document.forms["myform"].elements["num3"].value = euro.toFixed(2);
	document.forms["myform"].elements["num4"].value = yen.toFixed(2);
	document.forms["myform"].elements["num5"].value = peso.toFixed(2);

}
