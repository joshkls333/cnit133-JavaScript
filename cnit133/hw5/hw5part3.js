/**********
HW5 - Part 3 JavaScript File
Created by: Josh Klaus
Email: jklaus1@mail.ccsf.edu
**********/

// Modified solution found in Coding Exercises - Arrays
// Credit to https://insight.ccsf.edu/mod/book/view.php?id=549644&chapterid=150032

var total = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
var commission, commr;

var errorMessage = "<span style='color: #000000; background-color: #FF8199;" + 
						"width: 100px;font-weight: bold; font-size: 14px;'>" +
						"Input must be a valid number.</span>";


function init() 
{
	for ( var i = 0; i < total.length; ++i ) {
		total[i] = 0;
	}  
}

function addEntry() 
{
	commission = 200 + parseInt(document.getElementById("grossnum").value) * 0.09; 
	commr = commission.toFixed(0);                            

	if (isNaN(commr)){
		document.getElementById("errorMsg").innerHTML = errorMessage;
	}   else {

		document.getElementById("errorMsg").innerHTML = "";

		if (commr <= 300){
			total[0] ++;
		} else if (commr <= 400){
			total[1] ++;
		} else if (commr <= 500){
			total[2] ++;
 		} else if (commr <= 600){
			total[3] ++;
 		} else if (commr <= 700){
			total[4] ++;
 		} else if (commr <= 800){
			total[5] ++;
 		} else if (commr <= 900){
			total[6] ++;
 		} else if (commr <= 1000){
			total[7] ++;
		} else {
			total[8] ++;
		}

	}

	document.getElementById("output").value =
   		"Number of people who paid dues " +
   		"in the following ranges:\n" +
   		"$200-$299.99 \t " + total[0] + "\n" +
   		"$300-$299.99 \t " + total[1] + "\n" +
   		"$400-$299.99 \t " + total[2] + "\n" +
   		"$500-$299.99 \t " + total[3] + "\n" +
   		"$600-$299.99 \t " + total[4] + "\n" +
   		"$700-$299.99 \t " + total[5] + "\n" +
   		"$800-$299.99 \t " + total[6] + "\n" +
   		"$900-$999.99 \t " + total[7] + "\n" +     
  		"$1000 and over \t " + total[8];

 	document.getElementById("commission").value = commr;

}



         




