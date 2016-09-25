// React when a browser action's icon is clicked.
chrome.browserAction.onClicked.addListener(function(tab) {
    
  
        alert();
   


  //}
});

function getDef(tab){



    $.ajax({
        type:'GET',
        url:"http://api.urbandictionary.com/v0/define?term=" + "placeholder",
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
                callback(result);

 

        },
        
        dataType:'jsonp'
    });
}
