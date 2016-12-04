/**********
HW8 - Part 4 JavaScript File
Created by: Josh Klaus
Email: jklaus1@mail.ccsf.edu
**********/

// Thanks and credit to the following for providing direction:
// https://fog.ccsf.edu/~srubin/ajaxZip1.html


/* function getState
     parameter: state abbreviation
     action: create the XMLHttpRequest object, register the handler for onreadystate,
             prepare to send the request (with open), and send the request, along
             with the zip code, to the serve */


function getState(stcode)   {


/* create an XMLHttpRequest object based on the type of web browser being used.
*/


  var ajaxRequest;  // The variable that makes Ajax possible!

  try{
    // Opera 8.0+, Firefox, Safari
    ajaxRequest = new XMLHttpRequest();
  } catch (e){
    // Internet Explorer Browsers
    try{
      ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
      try{
        ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
      } catch (e){
        // Something went wrong
        alert("Your browser broke!");
        return false;
      }
    }
  }


/* Register the embedded receiver function as the handler */


    ajaxRequest.onreadystatechange = function() {

/* 4 means that the response has been completed and 200 means the request was successfully
    copleted */

    if (ajaxRequest.readyState == 4 && ajaxRequest.status == 200) {


/* The receiver gets the response text, uses the split method to spearate it into
   city and state, and sets the text boxes for city and state to the values received

   The assignments to the city and state text boxes are placed in selection
   constructs to preven the overwriting of user-input city and state names
   for the cases  where the zip code was NOT found on the server or the data
   from the server was incorrect

*/

        var result = ajaxRequest.responseText;
        var state = result.split(', ');

     if (document.getElementById("name").value == "")
             document.getElementById("name").value = state[0];

     if (document.getElementById("cap").value == "")
             document.getElementById("cap").value = state[1];

     if (document.getElementById("pop").value == "")
             document.getElementById("pop").value = state[2];
  }
     }


/* Specify the URL of server-side script that will be used in our Ajax application.
   Use the send method to send our request to the server. The city and state text
   boxes pull values from the server from "getCityState.php"
   without having to reload the entire page! */


    ajaxRequest.open("GET", "getState1.php?stcode=" + stcode);
    ajaxRequest.send(null);

}

function Validate()
{


// create messages


  var msg = "zip code error\nemail not opened";
        var msg1 = "name or address cannot be blank\nemail not opened";
        var name1 = document.forms["myForm"].elements["name"].value;
        var addr1 = document.forms["myForm"].elements["street"].value;
  var zip1 = document.forms["myForm"].elements["city"].value;

  if (zip1 == "zip code error")
    {
            alert (msg);
            document.forms["myForm"].elements["city"].value = "";
            document.forms["myForm"].elements["state"].value = "";
            document.forms["myForm"].elements["zip"].value = "";
            document.forms["myForm"].elements["zip"].focus();
        return false;
        }

   if (name1 == "" || addr1 == "")
       {
        alert (msg1);
        return false;
       }


}



