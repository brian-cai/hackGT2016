chrome.browserAction.onClicked.addListener(function(tab) {

    chrome.tabs.create({url: "file:///C:/Georgia%20Tech/hackGT2016/Extensions/urbandictionary/udicAPI.html"}, 
    function (tab){
    console.log("Successfully opened new tab");
  })


  

});

/*
var t = '';
function gText(e) {
    t = (document.all) ? document.selection.createRange().text : document.getSelection();

    getDef(t, function(result) {
        alert(result)
    });
    //document.getElementById('input').value = t;
}
document.onmouseup = gText;
if (!document.all) document.captureEvents(Event.MOUSEUP);
*/

function doIt() {
            function getRandomColor() {
                var letters = '0123456789ABCDEF';
                var color = '#';
                for (var i = 0; i < 6; i++ ) {
                    color += letters[Math.floor(Math.random() * 16)];
                }
                return color;
                }
            var color = getRandomColor();
            document.body.style.backgroundColor= color;
            // color;
        }


function popUp() {
    alert();
}