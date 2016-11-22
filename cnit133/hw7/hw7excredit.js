/**********
HW7 - Extra Credit JavaScript File
Created by: Josh Klaus
Email: jklaus1@mail.ccsf.edu
**********/

// credit to the following for the majority of the help:
// http://zylla.wipos.p.lodz.pl/games/slide16b.html
// credit to R.J.Zylla

var a = 15;  //empty cell
var cflag = false;
var tried = 0;
var blank = "img_15/0.gif";
var thumbsup = "img_15/win.png";
var tab = new Array(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0);

function dataInit() {
  a =15;  
  cflag = false;  
  tried = 0;
  tab = Array(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0);
}

function tryMove(click) {
  if ((( a-1 == click) && ( a%4 != 0)) ||
      (( a+1 == click) && ( a%4 != 3)) ||
       ( a-4 == click) ||
       ( a+4 == click)) {
    swap(a, click);  a = click;
    check();
    return;
  }
  if ((a%4 == click%4) && (a != click)) {
    if (a>click)  // move down
         for(i=a-4; i>=click; i=i-4) tryMove(i); // recursive call
    else for(i=a+4; i<=click; i=i+4) tryMove(i); // recursive call
  }
  if ((Math.floor(a/4) == Math.floor(click/4)) && (a != click)) {
    if (a>click)  // move right
     for(i=a-1; i>=click; i--) tryMove(i); // recursive call
    else for(i=a+1; i<=click; i++) tryMove(i); // recursive call
  }
} // fun tryMove

function shuffle() {
  document.images[a].src = blank;
  cflag = false;
  while (tried < 200) { // było 200
    tryMove(Math.round((Math.random() *15)));
  }
  tried = 0;
  cflag = true;
} // fun shuffle


function swap(a, b) {
var temp = document.images[a].src;
    document.images[a].src = document.images[b].src;
    document.images[b].src = temp;
var tttt = tab[a];  tab[a]=tab[b];  tab[b]=tttt;
} // fun swap

function check () {
var count = 0;
  if (!cflag) {
    tried++;
    return;
  }
  for (var i=0; i < 15; i++) {
    if (tab[i] == (i + 1)) count++;
  }
  if (count < 15) { //  alert(count + " number(s) are correct");
  }
  else {
    alert("     Hooray!! You are the Winner! \nThe final piece to the puzzle is your prize.");
    cflag = false;
    document.images[15].src = thumbsup;
  }
} // fun check()
