/*function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
    }
var color = getRandomColor();
document.body.style.backgroundColor = color;

    
*/
seizure();
//setColor();

function seizure(){

//setInterval(setColor, 500); 

//setInterval(alert("lol"), 500); 
setInterval(function(){ setColor(); }, 50);
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

    
