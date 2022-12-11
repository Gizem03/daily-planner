var currentDay = $("#currentDay");
var currentDate = moment().format("dddd, MMMM Do");
currentDay.html(currentDate);

var currentTime = moment(09, "HH");
var now = moment();

// TODO implement localstorage, use date, hour and text, function saveEvent
// TODO read from localstorage, function readDay
// TODO use fontawesome to use save icon in designs
// TODO fix the row styling to be 100% width
// TODO this might change after watching the video
// TODO figure out where to use the timeBlock
var timeBlock = $("<div>");

var container = $(".container");
container.append(timeBlock);

while (currentTime.hour() < 18) {
  console.log(currentTime.format("hha"));
  var row = $("<div>");

  var hour = $("<div>");
  hour.html(currentTime.format("hha"));

  var btn = $("<button>");
  btn.html("Save");
  btn.addClass("saveBtn");

  row.addClass("row");
  row.append(hour);
  var textarea = $("<textarea>");
  row.append(textarea);
  row.append(btn);
  timeBlock.append(row);

  var curHour = currentTime.hour();
  var nowHour = now.hour();
  if (curHour < nowHour) {
    // row.addClass("future");
    console.log("fooo");
    textarea.addClass("past");
  } else if (curHour === nowHour) {
    textarea.addClass("present");
  }

  // TODO handle future

  currentTime.add(1, "hours");
}
