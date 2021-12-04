
//  Use JavaScript to Toggle Hide/Show <p> element on click for blag articles  SOURCE:https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_toggle_hide_show 

    function myFunction(){
        var x = document.getElementsById("blagJ");
        if(x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
  