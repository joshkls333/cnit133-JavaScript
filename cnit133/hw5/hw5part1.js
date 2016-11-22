/**********
HW5 - Part 1 JavaScript File
Created by: Josh Klaus
Email: jklaus1@mail.ccsf.edu
**********/

// Modified solution found in Form Pulldown Menus chapter of chap 5 - Arrays
// Credit to solution found in https://insight.ccsf.edu/mod/book/view.php?id=549644&chapterid=150030

$(document).ready(function(){

	$("#myform").validate({

		messages: {
			name: "Please enter your name",
            compos: "Please select a operating system",
            lang: "Please select at least one language",
            science: "Please choose a Science subject"
	    },

		errorPlacement: function(error, element) 
		{
			if ( element.is(":radio") || element.is(":checkbox")) 
			{
				error.appendTo( element.parent());
			} else {
				error.insertAfter(element);
			}
		} // end errorPlacement	  
	});
});

function onChangeHandler() {
    var site1 = myForm1.changeSite.options[myForm1.changeSite.selectedIndex].value;
    window.location = site1;
}


function onClickHandler() {
    var site2 = myForm2.clickSite.options[myForm2.clickSite.selectedIndex].value;
    window.location = site2;
}

