//Accept a message element ID 'messageCon'
//remove "correct" element from the DOM.
//Remove corresponding message from the private array in IIFE2. the getter
//

var chatty = (function(chatty) {
  var message =  document.getElementByID('messageContainer').innerHTML;
  document.querySelector("body").addEventListener("click", function(event) {
    if (event.target.class  === "deleteButton") {
      //delete the corresponding message
      this.message.setAttribute("disabled", true);

    }
  })
}(chatty || {}));
