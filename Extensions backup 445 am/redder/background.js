/*
  // Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  console.log('Turning ' + tab.url + 'into a random color!');
  
  chrome.tabs.executeScript({
    file: "color.js" 
  });

});
*/
chrome.browserAction.onClicked.addListener(function(tab) {
seizure();
}
)

function seizure(){

//setInterval(setColor(), 500); 

}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function setColor() {
var color = getRandomColor();
document.body.style.backgroundColor = color;
}

    
