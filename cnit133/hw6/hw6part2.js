/**********
HW6 - Part 2 JavaScript File
Created by: Josh Klaus
Email: jklaus1@mail.ccsf.edu
**********/

// Thanks to the following for help on the window operation:
// https://fog.ccsf.edu/~srubin/winOpen.html

function process() {

    var textBlock, searchChar, textLength;

    textBlock = document.getElementById("textBox").value;

    searchChar = document.getElementById("searchChar").value;

    textLength = textBlock.length;

    var count = 0;

    for(var i = 0; i < textLength; i ++) {
        
        if (textBlock.charAt(i) == searchChar){
            count ++;
        }
    }

    if (count > 0) {

        document.forms["resultsArea"].elements["results"].value = ("The character: " + searchChar + " occurred " + count + " times."); 

    } else {

        var newWindow = window.open("", "new_window", "top=10, left=10, width=300, height=100");

        var myText = "<html>\n";
            myText += "<head>\n";
            myText += "<title>Popup Window</title>\n";
            myText += "</head>\n";
            myText += "<body>\n";
            myText += "<div align='center'>\n";
            myText += "<p><b>Search character " + searchChar + " not found in text string!</b></p>\n";
            myText += "<input type='button' value='Close Window' onclick='window.close()'>\n";
            myText += "</div>\n";
            myText += "</body>\n";
            myText += "</html>";


        newWindow.focus();
        newWindow.document.write(myText);
        newWindow.document.close();
    }


} 