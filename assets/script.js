// set the date
function setHeadlineDate() {
  var currentDay = $("#currentDay");
  var currentDate = moment().format("dddd, MMMM Do");
  currentDay.html(currentDate);
}

// TODO implement localstorage, use date, hour and text, function saveEvent
// TODO read from localstorage, function readDay
// TODO use fontawesome to use save icon in designs
// TODO fix the row styling to be 100% width
// TODO figure out where to use the timeBlock
// TODO finish up styling to match the mock gif

function displayDailyPlanner() {
  // TODO this might change after watching the video

  var container = $(".container");

  // time block rendering
  var currentTime = moment(09, "HH");
  var now = moment();
  while (currentTime.hour() < 18) {
    var row = $("<div>");
    row.addClass("row");
    var textarea = createRow(currentTime, row);
    container.append(row);

    determineRowColour(currentTime, now, textarea);

    currentTime.add(1, "hours");
  }
}

function determineRowColour(currentTime, now, textarea) {
  var curHour = currentTime.hour();
  var nowHour = now.hour();
  if (curHour < nowHour) {
    textarea.addClass("past");
  } else if (curHour === nowHour) {
    textarea.addClass("present");
  } else {
    textarea.addClass("future");
  }
}

function createRow(currentTime, row) {
  var hour = $("<div>");
  hour.html(currentTime.format("hha"));

  var btn = $("<button>");
  btn.html("Save");
  btn.addClass("saveBtn");

  var textarea = $("<textarea>");

  row.append(hour);
  row.append(textarea);
  row.append(btn);
  return textarea;
}

setHeadlineDate();
displayDailyPlanner();
