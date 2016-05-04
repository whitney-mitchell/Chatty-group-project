var chatty = (function () {
	var messages = [];

	return {
		getMessagesArray: function() {
			return messages;
		}
	};
 }());


// Event listener for text input, keypress Enter.
var msgResult = document.getElementById("messageInput");
msgResult.addEventListener("keypress" function(event) {
	if (event.keyCode === 13) {
		chatty.addMsg(msgResult.value);
		msgResult.value = "";
	}
});
