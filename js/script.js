var HOURHAND = document.getElementById("hour");
var MINUTEHAND = document.querySelector("minute");
var SECONDHAND = document.getElementsByName("second");

// move hands every second
function moveHands() {
  // get current date
  var now = new Date(),
    sec = now.getSeconds(),
    min = now.getMinutes(),
    hr = now.getHours();
  tick = 360 / 60; //angle of one tick

  // setting the initial position of the hands
  var secHandPos = tick * sec;
  var minHandPos = tick * min + (sec / 60) * tick;
  var hrHandPos = tick * 5 * hr + (min / 60) * tick * 5;

  console.log(now);

  function updateTime() {
    secHandPos += tick;
    minHandPos += tick / 60;
    hrHandPos += tick / 60 / 60;

    $("#second").css("transform", `rotate(${secHandPos}deg)`);
    $("#minute").css("transform", `rotate(${minHandPos}deg)`);
    $("#hour").css("transform", `rotate(${hrHandPos}deg)`);
  }

  updateTime(); // we have to call it here for it to work immediately and then after every second with setInterval. without it (writing the whole updateTime inside of the setInterval) makes it work only after one second
  setInterval(updateTime, 1000);
}

moveHands();

$(document).ready(function() {
  // append a div dropdowns with sub-divs with empty dropdowns to choose hour, minute, sound
  $("main").append(
    '<div class="dropdowns"><div class="select-hour"><label for="alarm-hour">Select hour:</label><select id="alarm-hour" size=5></select></div></div><div class="dropdowns"><div class="select-minute"><label for="alarm-minute">Select minute:</label><select id="alarm-minute" size=5></select></div></div><div class="dropdowns"><div class="select-sound"><label for="sound">Select sound:</label><select id="sound" size=5></select></div></div>'
  );

  //append options with values 1 to 24 to hour dropdown
  var x;
  for (x = 0; x < 24; x++) {
    $("#alarm-hour").append(`<option value=${x}>${x}</option>`);
  }

  //append options with values 1 to 24 to hour dropdown
  for (x = 0; x < 60; x++) {
    $("#alarm-minute").append(`<option value=${x}>${x}</option>`);
  }

  //append options with sounds
  for (x = 1; x < 5; x++) {
    $("#sound").append(`<option value=sound ${x}>Sound ${x}</option>`);
  }

  // get user's choice from the dropdown select fields

  // try this:  $("#box1 option:selected").text();
});
