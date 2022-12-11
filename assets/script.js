console.log("gizosko");

var currentDay = $("#currentDay");
var currentDate = moment().format("dddd, MMMM Do");
currentDay.html(currentDate);

var startOfBusiness = moment(09, "HH");

// TODO this might change after watching the video
var timeBlock = $("<div>");

var container = $(".container");
container.append(timeBlock);

while (startOfBusiness.hour() < 18) {
  console.log(startOfBusiness.format("hha"));
  var row = $("<div>");

  var hour = $("<div>");
  hour.html(startOfBusiness.format("hha"));

  var btn = $("<button>");
  btn.html("Save");
  btn.addClass("saveBtn");

  row.addClass("row");
  row.append(hour);
  row.append($("<textarea>"));
  row.append(btn);
  timeBlock.append(row);

  startOfBusiness.add(1, "hours");
}
