var button = document.getElementById("channelButton");
var spirit = document.querySelector('input[name="spirit"]:checked').value;
var box = document.getElementById("textbox");
button.onclick = function() {channel()};
function channel(){
    switch(spirit){
        case "lincoln":
            box.placeholer="four score and seven years ago";
            break;
        case "elvis":
            box.placeholer="hey pretty mama";
            break;
        case "swift":
            box.placeholer="i shake it off, i shake it off";
            break;
            }
        }