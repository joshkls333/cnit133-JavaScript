/**********
HW6 - Part 4 JavaScript File
Created by: Josh Klaus
Email: jklaus1@mail.ccsf.edu
**********/

 // Thanks to the following for providing some direction:
 // https://fog.ccsf.edu/~srubin/hw6dEx.html

function letterSearch() {

    var count = 0;
    var stringToSearch = document.getElementById("textBox").value.toLowerCase();
    var letterArray = "abcdefghijklmnopqrstuvwxyz".split('');
    var occurrences = [];


	for (var i = 0; i < letterArray.length; i++) {
    	occurrences[i] = 0;
   	}
 	
 	var position = 0;         
   	for (var i = 0; i < letterArray.length; i++) {
       	result = stringToSearch.indexOf(letterArray[i], position);
       	while (result != -1) {
        	count++;
            position = result;
            if (position + 1 == stringToSearch.length) { 
            result = -1;
        } else {
        	result = stringToSearch.indexOf(letterArray[i], position + 1);
        }
       }
       occurrences[i] = count;  
       count = 0;
       position = 0;
    }

    document.forms["resultsForm"].elements["results"].value = ( "Letter  " + "Occurrences\n");  

    for (var i = 0; i < letterArray.length; i++) {
        document.forms["resultsForm"].elements["results"].value +=  "    " + 
        	letterArray[i] + "\t\t" + occurrences[i] + "\n";
    }
}

