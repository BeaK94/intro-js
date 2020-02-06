$(document).ready(function() {
  /* $(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
      $("#top-button").addClass("show");
    } else {
      $("#top-button").removeClass("show");
    }
  }); */

  $(".top-button").on("click", function(e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "300");
  });

  //add the logo class to the images I want to make blink, making the logo blink both in the header and in the footer

  $(".nav img").addClass("logo");

  function logoBlinking() {
    $("img.logo")
      .fadeTo(1000, 0.2)
      .fadeTo(1000, 1, logoBlinking);
  }
  logoBlinking();

  //change color of mineral waters and protein bars
  $('[data-type="mineralwater"]').css("background-color", "green");
  $('[data-type="proteinbar"]').css("background-color", "blue");

  //adding printing button to both pages, a button that prints the page
  $(".navbar").append($('<li><button id="print-btn"></button></li>'));
  $("#print-btn").on("click", function() {
    window.print();
  });

  //making the first word of all person-card paragraphs

  //$.each($('p.card-text'), function() {$('p.card-text').text().slice(0,1).css("font-weight", "bold");}); --- doesnt work. The line till /slice)0,1) returns a string of the first LETTER of the paragraph I want
  //$('.card-text').slice(0,1).css("font-weight", "bold")
  //split(' ')[0].css("font-weight", "bold")

  $(".person-card p").each(function() {
    var html = $(this).html();
    var word = html.substr(0, html.indexOf(" "));
    var rest = html.substr(html.indexOf(" "));
    $(this)
      .html(rest)
      .prepend($("<strong/>").html(word));
  });

  //moving Michael before Henry. Add IDs to Michael and Henry and then insertBefore()
  /* $(".person-card")
    .last()
    .attr("id", "michael");
  $(".person-card")
    .first()
    .attr("id", "henry");
  $("#michael").insertBefore($("#henry")); */

  //moving Michael before Henry. Searching for the name!
  $(".person-card:contains(Lewiston)").prependTo(".people-cards");

  //changing "people" headline and "people" in navbar into "personnel"
  $('#people h2, [href="#people"]').html("personnel");

  //an API call to Weather API to display Helsinki weather in the floating unclickable button
  $.ajax({
    url:
      "http://api.openweathermap.org/data/2.5/weather?q=helsinki&units=metric&APPID=5fa0b75646bc8623b0656789ee77d610"
  }).done(function(resp) {
    console.log(resp.main.temp);
    console.log(resp.main.feels_like);
    $(".weather-button").html(
      "Temperature in Helsinki is " +
        resp.main.temp +
        " and it feels like " +
        resp.main.feels_like
    );
  });

  //an API call to Weather API to display Silesia weather in the list in nav
  $.ajax({
    url:
      "http://api.openweathermap.org/data/2.5/find?lat=50.26&lon=19.03&cnt=5&units=metric&APPID=5fa0b75646bc8623b0656789ee77d610"
  }).done(function(resp) {
    /* resp.list.forEach(function(place) {
      console.log(
        place.name +
          ": " +
          place.main.temp +
          " (" +
          place.main.feels_like +
          "). "
      );
    }); */

    function getWeatherInfo() {
      var result = "";
      resp.list.forEach(function(place) {
        result +=
          place.name +
          ": " +
          place.main.temp +
          " (" +
          place.main.feels_like +
          "). ";
      });
      return result;
    }

    $(".weather-silesia").html(getWeatherInfo());
  });
});
