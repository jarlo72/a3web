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

  /* https://www.youtube.com/watch?v=AiiXLmqhndU*/

   /*var img = document.querySelector("img.squirrel");
   img.addEventListener("mouseover", squirrelsummon);
   function dquirrelsummon(event){
    console.log(event.target);
  }*/


  /* https://stackoverflow.com/questions/49350534/how-to-call-js-function-on-hover-from-html */


