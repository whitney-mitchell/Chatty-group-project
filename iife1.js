
//load JSON file and return the array of objects. . AHA! IT IS ONJECTS!
var chatty = (function(newchatty) {

}(chatty));

  function executeThisCodeIfFileFails () {
  // console.log("an error occurred while loading this file");
}

  function executeThisCodeAfterFileIsLoaded () {
  // console.log(this.responseText);
}

  var data = JSON.parse(this.responseText);
  console.log("data", data);


var myRequest = new XMLHttpRequest();

myRequest.addEventListener("load", executeThisCodeAfterFileIsLoaded);
myRequest.addEventListener("error", executeThisCodeIfFileFails);

myRequest.open("get", "main.json");

myRequest.send();
