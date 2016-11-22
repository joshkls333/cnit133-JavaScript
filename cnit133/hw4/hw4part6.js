/**********
HW4 - Part 6 JavaScript File
Created by: Josh Klaus
Email: jklaus1@mail.ccsf.edu
**********/

// JQuery function to animate a Christmas Tree

$(document).ready(function(){
  $("button").click(function(){
    $("#xmasbox").animate({height:600},"slow");
    $("#xmasbox").animate({width:100},"slow");
    $("#xmasbox").animate({height:150},"slow");
    $("#xmasbox").animate({width:400},"slow");
    $("#xmasbox").animate({height:300},"slow");
    $("#xmasbox").animate({width:300},"slow");
  });
});

function xmassong()
{
	var xmassongtext = "";
	var xmassongtext2 = "";
	var xmasdayword = "";
	var xmasgift = "";

	for(var i = 1; i <= 12; i ++)
	{
		var xmasday = i;
		var xmasgifttext = "";


		switch (xmasday)
		{
			case 1:
				xmasdayword = "first";
				break;
			case 2:
				xmasdayword = "second";
				break;
			case 3:
				xmasdayword = "third";
				break;
			case 4:
				xmasdayword = "fourth";
				break;
			case 5:
				xmasdayword = "fifth";
				break;
			case 6:
				xmasdayword = "sixth";
				break;
			case 7:
				xmasdayword = "seventh";
				break;
			case 8:
				xmasdayword = "eigth";
				break;
			case 9:
				xmasdayword = "ninth";
				break;			
			case 10:
				xmasdayword = "tenth";
				break;
			case 11:
				xmasdayword = "eleventh";
				break;
			case 12:
				xmasdayword = "twelfth";
				break;

		}
		for(var j = i; j >= 1; j -- )
		{
			var xmasdaygift = j;

			switch (xmasdaygift)
			{
				case 1:
					xmasgift = "A Partridge in a Pear Tree";
					break;
				case 2:
					xmasgift = "Two Turtle Doves";
					break;
				case 3:
					xmasgift = "Three French Hens";
					break;
				case 4:
					xmasgift = "Four Calling Birds";
					break;
				case 5:
					xmasgift = "Five Golden Rings";
					break;
				case 6:
					xmasgift = "Six Geese a Laying";
					break;
				case 7:
					xmasgift = "Seven Swans a Swimming";
					break;
				case 8:
					xmasgift = "Eight Maids a Milking";
					break;
				case 9:
					xmasgift = "Nine Ladies Dancing";
					break;			
				case 10:
					xmasgift = "Ten Lords a Leaping";
					break;
				case 11:
					xmasgift = "Eleven Pipers Piping";
					break;
				case 12:
					xmasgift = "12 Drummers Drumming";
					break;
			}
			xmasgifttext += "<br />" + xmasgift;

		}

		xmassongtext =	"<br />On the " + xmasdayword + " day of Christmas" +
					    "<br />My True Love gave to me:" + xmasgifttext;
		xmassongtext2 += "<br />" + xmassongtext;
	}

	document.getElementById("christmas").innerHTML = xmassongtext2;


}


