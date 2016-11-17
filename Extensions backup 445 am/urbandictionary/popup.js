$(function() {
    // initially canvas is display: none
    var $toggle = $('#lookUp')
//toggle-state
    // TODO: Refactor code 

    $toggle.click(function() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage({tabs.id, {data: 'DisplayToggle'}}, function(response) {
                window.close();
            });
        });
    });

   

});