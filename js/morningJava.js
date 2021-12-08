//  Javascript function for navbar and responsive design 

function navFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


//  Use JavaScript to Toggle Hide/Show <p> elements on click for blag articles  SOURCE:https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_toggle_hide_show 

/* JD-12/05 Two ways to do this: Source for code below: https://www.w3schools.com/jsref/event_onmouseleave.asp */

/* 1. You can either use these two lines of code event listener method... JD-12-05 */
/*document.getElementById("squirrel").addEventListener("mouseenter", mouseEnter); */
/*document.getElementById("squirrel").addEventListener("mouseleave", mouseLeave); */

/* 2. ... or these two lines of code, which uses the html DOM the events to an img element. JD-12-05 */
document.getElementById("squirrel").onmouseenter = function() {mouseEnter()};
document.getElementById("squirrel").onmouseleave = function() {mouseLeave()};

function mouseEnter() {
  document.getElementById("squirrel").src="images/profiles/squirrels121.jpg";
}

function mouseLeave() {
  document.getElementById("squirrel").src="images/profiles/squirrel121bw.jpg";
}

//  GR 12-03 Use JavaScript to Toggle Hide/Show <p> elements on click for blag articles  SOURCE:https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_toggle_hide_show 

function toggleFunction(){
    document.getElementsByClassName("Blags").ontoggle = function() {toggleFunction()}; 
}

/* SV 12-08 - a basic script for highlighting a random team member */
window.onload = choosePic; /* inspiration: https://www.peachpit.com/articles/article.aspx?p=2239154&seqNum=10 */
var teamPics = new Array("images/profiles/amanda.jpg", "images/profiles/jmd121.jpg", "images/profiles/profileChristie121.jpg", "images/profiles/profilegabby121.jpg", "images/profiles/Stephen121.jpg", "images/profiles/squirrels121.jpg");

function choosePic() {
  var randomNum = Math.floor(Math.random() * teamPics.length);
  document.getElementById("TeamSnap").src = teamPics[randomNum];
}