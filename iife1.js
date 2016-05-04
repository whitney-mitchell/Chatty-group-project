
//load JSON file and return the array of objects. . AHA! IT IS OBJECTS!
var chatty = (function(newchatty) {

function executeThisCodeIfFileFails () {
  // console.log("an error occurred while loading this file");
}

function executeThisCodeAfterFileIsLoaded () {
  console.log(this.responseText);

  var dataArray = JSON.parse(this.responseText).messages;
    console.log("data", dataArray);

  var messageList = document.getElementById("messageCon");

  for(index in dataArray) {
    var messageData = "";
    var messageObject = dataArray[index];
    for (key in messageObject) {
      var output = messageObject[key];
      messageData += "<div>";
      messageData += output;
      messageData += "</div>";

      messageList.innerHTML += messageData;
    }
  }
}

var myRequest = new XMLHttpRequest();

myRequest.addEventListener("load", executeThisCodeAfterFileIsLoaded);
myRequest.addEventListener("error", executeThisCodeIfFileFails);

myRequest.open("get", "main.json");

myRequest.send();

}(chatty));

