
//  GR 12-03 Use JavaScript to Toggle Hide/Show <p> elements on click for blag articles  SOURCE:https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_toggle_hide_show 

    function myFunction(){
        document.getElementById("blagC").ontoggle = function() {myFunction()};
    }
