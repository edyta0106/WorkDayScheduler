// Wrap JS code below in the "ready" method to ensure the code is not run until all DOM elements have been created
$(document).ready(function () {
  // Created text for current date to be displayed
  $("#currentDay").text(dayjs().format("dddd, MMM D"));
  console.log(dayjs());

  // Lists current hour
  $("#hour").text(dayjs().hour());
  console.log(dayjs().hour()); //lists the current hour in 24-hr format in dev tools

  //
  var saveBtn = $(".saveBtn");
  saveBtn.on("click", function (event) {
    event.preventDefault();
    var timeBlock = parseInt($(this).parent().attr("id").split("-")[1]);
    var textInput = $(this).siblings("textarea").val();
    localStorage.setItem(timeBlock, textInput);
  });
  $("#hour-9 textarea").val(localStorage.getItem("9"));
  $("#hour-10 textarea").val(localStorage.getItem("10"));
  $("#hour-11 textarea").val(localStorage.getItem("11"));
  $("#hour-12 textarea").val(localStorage.getItem("12"));
  $("#hour-13 textarea").val(localStorage.getItem("13"));
  $("#hour-14 textarea").val(localStorage.getItem("14"));
  $("#hour-15 textarea").val(localStorage.getItem("15"));
  $("#hour-16 textarea").val(localStorage.getItem("16"));
  $("#hour-17 textarea").val(localStorage.getItem("17"));

  // Create a function to apply color to past, present, or future class on each timeblock
  function timeBlockColor() {
    $(".time-block").each(function () {
      var currentHourBlock = parseInt($(this).attr("id").split("-")[1]);
      var currentTime = dayjs().hour();

      if (currentHourBlock < currentTime) {
        $(this).children("textarea").addClass("past");
      } else if (currentHourBlock == currentTime) {
        $(this).children("textarea").addClass("present");
      } else {
        $(this).children("textarea").addClass("future");
      }
    });
  }
  timeBlockColor();
});
