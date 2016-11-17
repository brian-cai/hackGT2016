searchUrbanDict = function(word){

    var query = word.selectionText;
    console.log(query)
    //testAj(query); 
    chrome.tabs.create({url: "file:///C:/Georgia%20Tech/hackGT2016/Extensions/urbandictionary/udicAPI.html"})
        
        
 }


 //console.log(word.selectionText);
 
 /*
function testAj(searchT,callback)
{
    console.log(searchT)
        // Request the JSON and process it
    $.ajax({
        type:'GET',
        url:"http://api.urbandictionary.com/v0/define?term=" + searchT,
        //data:"id="+flickrid+"&lang=en-us&format=json&jsoncallback=?",
        success:function(data) {

                console.log("success!\n");
                //this prints out the object object
                console.log(data);

                //saves the thing into an Array
                theArray = data;
                var result = "";
                for (var i = 0; i<theArray.list.length; i++) {
                    result += ("Definition " + (i+1) + ": " + theArray.list[i].definition + "\n");
                    result += ("Thumbs up: " + theArray.list[i].thumbs_up + "\n");
                    result += ("Thumbs down: " + theArray.list[i].thumbs_down + "\n\n");
                }
                console.log(result);
                $('#data').text(result);
                callback(result);
            
 

        },
        
        dataType:'jsonp'
    });
    callback("error")
}
*/



chrome.contextMenus.create({
 title: "Testing Popups",
 contexts:["selection"],  // ContextType
 onclick: searchUrbanDict // A callback function
});


