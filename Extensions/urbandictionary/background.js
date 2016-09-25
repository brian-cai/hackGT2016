chrome.browserAction.onClicked.addListener(function(tab) {
prompt();
})

/*
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  
  //for js
  

  
  chrome.tabs.executeScript({
    file: "udicAPI.html"
  });
  

  chrome.tabs.create('url': 'file:///C:/Georgia%20Tech/hackGT2016/Extensions/urbandictionary/udicAPI.html', 
    function (tab){
    alert("1234");
  })

  

});
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
