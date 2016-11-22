/**********
HW4 - Part 5 JavaScript File
Created by: Josh Klaus
Email: jklaus1@mail.ccsf.edu
**********/


// JQuery function for Showing Instructions

$(document).ready(function()
{
	$("#flip").click(function()
	{
		$("#panel").slideToggle("slow");
	});
	
});

// JQuery for validating numeric input

$(document).ready(function(){
    $("#myform").validate({
	  // Rules for each input item
	  rules: 
	  {
		num: { required: true, number: true, min: 1, max: 3}
	  }
	});	  
});

         
function process()
{
	var n, list;
	
	n = document.forms["myform"].elements["num"].value;

	if( $("#myform").valid())
	{
		if( n == "1")
		{
			list = "<h4>Unordered List</h4><ul style='list-style-type: square;'>";
			for( var i = 1; i <= 3; i ++)
			{
				list += "<li>List item " + i + "</li>"; 
			} 
			list += "</ul>";

		}
		else if ( n == "2")
		{
			list = "<h4>Ordered Number List</h4><ol>";
			for( var i = 1; i <= 3; i ++)
			{
				list += "<li>List item " + i + "</li>"; 
			} 
			list += "</ol>";

		}
		else if ( n == "3")
		{
			list = "<h4>Ordered Letter List</h4><ol style='list-style-type: upper-alpha;'>";
			for( var i = 1; i <= 3; i ++)
			{
				list += "<li>List item " + i + "</li>"; 
			} 
			list += "</ol>";
		}
		else
		{
			list = "testwrong";
		}

		document.getElementById("listarea").innerHTML = list;
	}
}


