var chatty = (function(newchatty) {
	function executeThisCodeIfFileFails () {

	}

	function executeThisCodeAfterFileIsLoaded () {
		var dataArray = JSON.parse(this.responseText).messages;
		var messageList = document.getElementById("messageCon");
	  for(index in dataArray) {
	    var messageData = "";
	    var messageObject = dataArray[index];
	    for (key in messageObject) {
	      var output = messageObject[key];
        newchatty.addMsg(output);
	    }
	  }
	}

	var myRequest = new XMLHttpRequest();

	myRequest.addEventListener("load", executeThisCodeAfterFileIsLoaded);
	myRequest.addEventListener("error", executeThisCodeIfFileFails);

	myRequest.open("get", "main.json");


	myRequest.send();
	return newchatty;
})(chatty || {});


