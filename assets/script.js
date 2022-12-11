var currentDay = $("#currentDay");
var currentDate = moment().format("dddd, MMMM Do");
currentDay.html(currentDate);

var currentTime = moment(09, "HH");
var now = moment();

// TODO this might change after watching the video
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
