//one function to accept element ID and the user message and then add the message and delete button to the "specified parent element"
//store message in a private array in THIS IIFE.
//expose a function to read ALL messages and delete THE SELECTED message.
//below is example of setting query to body for adding elements.
//
document.querySelector("body").addEventListener("click", function(event) {
  console.log(event);

  // Handle the click event on any li
  if (event.target.tagName.toLowerCase() === "li") {
    console.log("You clicked on an <li> element");
  }

  // Handle the click event on any DOM element with a certain class
  if (event.target.className === "article-section") {
    console.log("You clicked on an `article-section` element");
  }

  // Inspect the `id` property of the event target
  if (event.target.id === "page-title") {
    console.log("You clicked on the page-title element");
  }
});
//example to disable elements in DOM
<button class="clear-messages">Clear messages</button>
// This will disable the first button with a class of "button-message"
document.getElementsByClassName("clear-messages")[0].setAttribute("disabled", true);
