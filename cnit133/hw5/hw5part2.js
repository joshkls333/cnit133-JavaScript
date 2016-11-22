/**********
HW5 - Part 2 JavaScript File
Created by: Josh Klaus
Email: jklaus1@mail.ccsf.edu
**********/

// Modified solution found in Coding Exercises - Arrays
// Credit to https://insight.ccsf.edu/mod/book/view.php?id=549644&chapterid=150032

 
$(function() {

	$( "#dialog" ).dialog({
		autoOpen: false,
		show: {
		effect: "clip",
		duration: 1000
		},

		hide: {
		effect: "fold",
		duration: 1000
		}
	});

	$( "#opener" ).click(function() {
		$( "#dialog" ).dialog( "open" );
	});
});

 

var stateArray = [ ["AL", "ALABAMA", "Montgomery", "4,779,736"],                     
                 ["AK", "ALASKA", "Juneau", "710,231"],  
                 ["AZ", "ARIZONA", "Phoenix", "6,392,017"],
                 ["AR", "ARKANSAS", "Little Rock", "2,915,918"],    
                 ["CA", "CALIFORNIA", "Sacramento", "37,253,956"],    
                 ["CO", "COLORADO", "Denver", "5,029,196"] ];    


function stateInformation()
{   
    var searchKey = document.forms["SearchForm"].elements["inputStateVal"].value;
    searchKey = searchKey.toUpperCase();  
    
    var found = false;
    for (var row = 0; row < stateArray.length; row++)
    {
	
       	if ((stateArray[row][0] == searchKey) || (stateArray[row][1] == searchKey))
     	{ 
       		document.forms["SearchForm"].elements["state"].value = stateArray[row][1];
       		document.forms["SearchForm"].elements["capital"].value = stateArray[row][2];
       		document.forms["SearchForm"].elements["population"].value = stateArray[row][3];  
       		row = stateArray.length;
       		found = true;
     	}           
    }

  	if ( found == false ) 
  	{
   		document.forms["SearchForm"].elements["state"].value= "State not found!"; 
    }
}

 