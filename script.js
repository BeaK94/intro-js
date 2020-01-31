$(document).ready(function() {
  /* $(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
      $("#top-button").addClass("show");
    } else {
      $("#top-button").removeClass("show");
    }
  }); */

  $("#top-button").on("click", function(e) {
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
  $(".navbar").append(
    $('<li><button id="print-btn">Print this page</button></li>')
  );
  $("#print-btn").on("click", function() {
    window.print();
  });
});

//style the button, add icon, do other tasks
