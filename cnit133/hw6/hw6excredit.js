/**********
HW6 - Extra Credit JavaScript File
Created by: Josh Klaus
Email: jklaus1@mail.ccsf.edu
**********/

// Thanks to the following for assistance with code:
// http://www.w3schools.com/js/tryit.asp?filename=tryjs_cookie_username
// https://fog.ccsf.edu/~srubin/cookie4.html
// http://hills.ccsf.edu/~eferenco/CNIT133/HW_6/index5.html


// JQuery function for showing a tooltip


$( function() {
    $( document ).tooltip();
}); 




function setCookie(cname,cvalue,exdays) {
    if (document.forms["myform"].elements["username"].value != 'rosebud' || document.forms["myform"].elements["password"].value != 'komodo') {
        alert('Please enter the correct username and password!');
        return false;
    };

    if (document.forms["myform"].elements["username"].value == 'rosebud' && document.forms["myform"].elements["password"].value == 'komodo') {
        alert('You entered correct username and password!');
        var newWindow = window.open("../homework6.html");
        newWindow.focus();
        newWindow.document.close();
        document.forms["myform"].elements["username"].value = '';
        document.forms["myform"].elements["password"].value = '';
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toGMTString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
    }
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user = getCookie("username");
    var passwd = getCookie("password");    
    if (user != "") {
        alert("Welcome again " + user);
        document.forms["myform"].elements["username"].value = 'rosebud';
        document.forms["myform"].elements["password"].value = 'komodo';
        document.forms["myform"].elements["username"].blur();
    } 
}

function deleteCookie() {

    var name, pass;

    name = getCookie("username");
    pass = getCookie("password");

    if (name!=null && name!="" ) {
        setCookie("username",name,-1);
        document.forms["myform"].elements["username"].value="";
        alert('Cookie deleted for '+ name + '!');
    }

    if (pass!=null && pass!="") {
        setCookie("password",pass,-1);
        document.forms["myform"].elements["password"].value="";
        alert('Cookie deleted for '+ pass + '!');
    }

    window.location.reload();

}

