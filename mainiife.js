//just saw this file. Not sure we need main.js and this. 
var chatty = (function () {
	var messages = [];

	return {
		getMessagesArray: function() {
			return messages;
		}
	};
 }());
