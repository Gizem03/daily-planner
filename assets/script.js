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
  var dailyPlanner = $("<div>");

  var container = $(".container");
  container.append(dailyPlanner);

  // time block rendering
  var currentTime = moment(09, "HH");
  var now = moment();
  while (currentTime.hour() < 18) {
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
    dailyPlanner.append(row);

    var curHour = currentTime.hour();
    var nowHour = now.hour();
    if (curHour < nowHour) {
      textarea.addClass("past");
    } else if (curHour === nowHour) {
      textarea.addClass("present");
    } else {
      textarea.addClass("future");
    }

    currentTime.add(1, "hours");
  }
}

setHeadlineDate();
displayDailyPlanner();
