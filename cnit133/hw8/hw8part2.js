/**********
HW8 - Part 2 JavaScript File
Created by: Josh Klaus
Email: jklaus1@mail.ccsf.edu
**********/

function ajaxFunction(){
    var xmlHttp;
    try{
    // Firefox, Opera 8.0+, Safari
        xmlHttp=new XMLHttpRequest();
    } catch (e) {
    // Internet Explorer
        try {
            xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {
                alert("Your browser does not support AJAX!");
                return false;
            }
        }
    }
    xmlHttp.onreadystatechange=function() {
        if(xmlHttp.readyState==4) {
            document.myForm.time.value=xmlHttp.responseText;
        }
    }
    xmlHttp.open("GET","serverTime.php",true);
    xmlHttp.send(null);

    var xmlHttp1
    try{
    // Firefox, Opera 8.0+, Safari
        xmlHttp1=new XMLHttpRequest();
    } catch (e) {
    // Internet Explorer
        try {
            xmlHttp1=new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                xmlHttp1=new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {
                alert("Your browser does not support AJAX!");
                return false;
            }
        }
    }
    xmlHttp1.onreadystatechange=function() {
        if(xmlHttp1.readyState==4) {
            document.myForm.date.value=xmlHttp1.responseText;
        }
    }
    xmlHttp1.open("GET","serverDateword.php",true);
    xmlHttp1.send(null);

    var xmlHttp2;
    try{
    // Firefox, Opera 8.0+, Safari
        xmlHttp2=new XMLHttpRequest();
    } catch (e) {
    // Internet Explorer
        try {
            xmlHttp2=new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                xmlHttp2=new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {
                alert("Your browser does not support AJAX!");
                return false;
            }
        }
    }
    xmlHttp2.onreadystatechange=function() {
        if(xmlHttp2.readyState==4) {
            document.myForm.date1.value=xmlHttp2.responseText;
        }
    }
    xmlHttp2.open("GET","serverDate.php",true);
    xmlHttp2.send(null);


}