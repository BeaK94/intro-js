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
    $('<li><button id="print-btn"></button></li>')
  );
  $("#print-btn").on("click", function() {
    window.print();
  });

  
//making the first word of all person-card paragraphs

//$.each($('p.card-text'), function() {$('p.card-text').text().slice(0,1).css("font-weight", "bold");}); --- doesnt work. The line till /slice)0,1) returns a string of the first LETTER of the paragraph I want
//$('.card-text').slice(0,1).css("font-weight", "bold")
//split(' ')[0].css("font-weight", "bold")


//moving Michael before Henry. Add IDs to Michael and Henry and then insertBefore()
$('.person-card').last().attr("id", "michael")
$('.person-card').first().attr("id", "henry")
$('#michael').insertBefore($('#henry'))

//changing "people" headline and "people" in navbar into "personnel"
$('#people h2, [href="#people"]').html("personnel");
});
