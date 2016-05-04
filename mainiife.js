// Event listener for text input, keypress Enter. Also assigning variable by element ids.
var msgResult = document.getElementById("messageInput");

msgResult.addEventListener("keypress", function(event) {
	if (event.keyCode === 13) {
		chatty.addMsg(msgResult.value);
		msgResult.value = "";
	}
});
