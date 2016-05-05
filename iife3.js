//Accept a message element ID 'messageCon'
//remove "correct" element from the DOM.
//Remove corresponding message from the private array in IIFE2. the getter
//

var chatty = (function(chat) {
  var message =  document.getElementById('messageCon').innerHTML;
      //delete the corresponding message
  chat.remove =  function removeButton(event) {
      event.target.parentNode.remove(event.parentNode);
      //and call method in iife2 to delete from private array.
      }
      return chat;
}(chatty || {}));
