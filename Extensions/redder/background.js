
  // Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  console.log('Turning ' + tab.url + 'into a random color!');
  
  chrome.tabs.executeScript({
    file: "color.js" 
  });

  alert(document.URL + "\n" + document.title);

  document.writeln("Hello World");

});

//chrome.tabs.create({url: "http://www.google.com"});

//chrome.browserAction.setTitle({"tabId": tab.id});

// trying to change the title
//chrome.tabs.onHighlighted.addListener(function (tab) {
//alert("ALERT YOU ARE CHANGING A TAB LOL")
//setBrowserActionBadge: function(allTasks) {
//chrome.browserAction.setBadgeText(text: "asdf");
//chrome.browserAction.setBadgeBackgroundColor(color : #FF0000);
//}
 
//});

 