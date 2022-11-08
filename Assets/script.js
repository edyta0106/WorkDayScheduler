// Wrap all code that interacts with the DOM in a call to jQuery to ensure that the code isn't run until the browser has finished rendering all the elements in the html.
// $(function () {

// TODO: Add a listener for click events on the save button. This code should use the id in the containing time-block as a key to save the user input in local storage. HINT: What does `this` reference in the click listener function? How can DOM traversal be used to get the "hour-x" id of the time-block containing the button that was clicked? How might the id be useful when saving the description in local storage?

// Created text for current date to be displayed
$("#currentDay").text(dayjs().format("dddd, MMM D"));
console.log(dayjs());

// ??? Lists specific hour ??
$("#hour").text(dayjs().hour());
console.log(dayjs().hour()); //why did I get 21?

// ??? Save text to local storage ???
var textInput = $("<textarea>");
function renderText() {
  var text = localStorage.getItem("textInput");
  textInput.text = text;
}

// ??? Need to add 'this' selector ???
var saveBtn = $(".saveBtn");
saveBtn.on("click", function () {
  localStorage.setItem("text", textInput);
  renderText();
});

// Create a function to apply past, present, or future class
function timeBlockColor() {
  $(".time-block").each(function () {
    // var currentBlock = $(this).children("");
  });
}

// TODO: Add code to apply the past, present, or future class to each time block by comparing the id to the current hour. HINTS: How can the id attribute of each time-block be used to conditionally add or remove the past, present, and future classes? How can Day.js be used to get the current hour in 24-hour time?
// TODO: Add code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements. HINT: How can the id attribute of each time-block be used to do this?

// });
