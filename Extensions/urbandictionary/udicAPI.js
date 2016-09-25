/* the OG Http Request
function loadUrban() {
    var xhr = new XMLHttpRequest();
    var keyString = "http://api.urbandictionary.com/v0/define?term=";
    var total = keyString += prompt("word");
    xhr.open("GET", total, false);
    xhr.send();
    var elements = xhr.responseText;
    console.log(xhr.responseText);
    console.log("     *****     ");
    console.log("     *****     ");
    console.log(elements.length);
}
*/
var theArray;
var result = "";

function testAj(entry)
{
        // Request the JSON and process it
    $.ajax({
        type:'GET',
        url:"http://api.urbandictionary.com/v0/define?term=" + entry,
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
            
 

        },
        
        dataType:'jsonp'
    });
}

function getDef(result2, callback)
{
        // Request the JSON and process it
    $.ajax({
        type:'GET',
        url:"http://api.urbandictionary.com/v0/define?term=" + result2,
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

//loadUrban();
testAj(prompt());



// highlighting text trigger
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

/* Version using prompt
function testAj()
{
        // Request the JSON and process it
    $.ajax({
        type:'GET',
        url:"http://api.urbandictionary.com/v0/define?term=" + prompt("type in the word"),
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
            
 

        },
        
        dataType:'jsonp'
    });
}
*/













//returns one char each apparently
/*function myFunction(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i].toString());
    }
}
myFunction(elements);
*/


//returns the first Element of the document, irrelevant
//element = document.firstElementChild;
//all;
//getElementById("tags");
//console.log(element);


//retrieve server errors
/*
console.log(xhr.status);
console.log(xhr.statusText);
console.log(xhr.getAllResponseHeaders());
*/