var s = document.createElement('udicAPI');
s.src = chrome.extension.getURL('udicAPI.js');
(document.head||document.documentElement).appendChild(s);
s.onload = function() {
    s.parentNode.removeChild(s);
};