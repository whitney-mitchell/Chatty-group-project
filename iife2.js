//one function to accept element ID and the user message and then add the message and delete button to the "specified parent element"
//store message in a private array in THIS IIFE.
//expose a function to read ALL messages and delete THE SELECTED message.
//below is example of setting query to body for adding elements.
//
var chatty = (function(string) {
//create private array
  var messages = [];
  string.addMsg = function(userText) {
    messages.push(userText);

    var toDom = document.getElementById("messageCon");

//set inner HTML with user text.
    toDom.innerHTML += '<p>' + userText + '<button class="deleteButton">Delete</button>' + '</p>';
    console.log(messages);
  }
  string.getMessagesArray = function() {
    return messages;
  }
//remove item from array if delete button is clicked.
  string.removeArray = function(event){
    var remove =  messages.indexOf(event.srcElement.parentElement.innerText.replace('Delete', ''));
    messages.splice(remove, 1);
    console.log("messages", messages);
  }
   return string;
})(chatty || {});

