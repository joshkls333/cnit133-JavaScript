/**********
HW7 - Part 2 JavaScript File
Created by: Josh Klaus
Email: jklaus1@mail.ccsf.edu
**********/

// Many thanks to the following code for providing instruction and direction:
// https://fog.ccsf.edu/~srubin/pjpass2.html

    $(document).ready(function () {
        $("#open").click(function () {
            var openElem = $(this);
            var loginForm = $("#login form");

            if (loginForm.css("display") == "none") {
                loginForm.slideDown(300, function () {
                    openElem.addClass("close");
                })
            } else {
                loginForm.fadeOut(600, function () {
                    openElem.removeClass("close");
                })
            }
        });
    });

    // function checkpass() is executed when the user clicks the form's submit button

    function checkpass() {

        var errormsg = "Password is incorrect";
        var pass = document.forms["myform"].elements["password"].value;

    // Check is entered password = rosebud and if so, then alert "correct"
    // Then change location to the form page named "pass.pl"

    // else if entered password is not = rosebud then alert error msg
    // and clear input password box and move cursor back to it
     
        
        if (pass !== "obama") {

            var htmlOutput = "<b style='color: red;'>Password is incorrect!</b>";

            document.getElementById("errorMsg").innerHTML = htmlOutput;
             
            document.forms["myform"].elements["password"].value = "";
            document.forms["myform"].elements["password"].focus();

            return false;
        
        } else {
            window.location="../hw7/hw7part2_b.html";
        }
    }

    function res() {

        document.getElementById("errorMsg").innerHTML = "";
        document.forms["myform"].elements["password"].focus();

    }

    function switchStyle(style) 
    {

        var body = document.getElementById("container");

        if(style == 0) {
            body.className = "red";
        }
        else if(style == 1) {
            body.className = "yellow";
        }
        else if(style == 2) {
            body.className = "green";
        }
        else if(style == 3) {
            body.className = "original";
        }
    }

