(function ($) {
  "use strict";

  // bootstrap dropdown hover

  // loader
  var loader = function () {
    setTimeout(function () {
      if ($("#loader").length > 0) {
        $("#loader").removeClass("show");
      }
    }, 1);
  };
  loader();

  $("nav .dropdown").hover(
    function () {
      var $this = $(this);
      $this.addClass("show");
      $this.find("> a").attr("aria-expanded", true);
      $this.find(".dropdown-menu").addClass("show");
    },
    function () {
      var $this = $(this);
      $this.removeClass("show");
      $this.find("> a").attr("aria-expanded", false);
      $this.find(".dropdown-menu").removeClass("show");
    }
  );

  var offcanvas_toggle = $(".js-offcanvas-toggle");
  offcanvas_toggle.on("click", function () {
    if ($("body").hasClass("offcanvas-open")) {
      $("body").removeClass("offcanvas-open");
    } else {
      $("body").addClass("offcanvas-open");
    }
  });

  $(document).click(function (e) {
    var container = $(".js-offcanvas-toggle, #offcanvas_menu");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      if ($("body").hasClass("offcanvas-open")) {
        $("body").removeClass("offcanvas-open");
      }
    }
  });

  $("#date-countdown").countdown("2020/10/10", function (event) {
    var $this = $(this).html(
      event.strftime(
        "" +
        '<span class="countdown-block"><span class="label">%w</span> weeks </span>' +
        '<span class="countdown-block"><span class="label">%d</span> days </span>' +
        '<span class="countdown-block"><span class="label">%H</span> hr </span>' +
        '<span class="countdown-block"><span class="label">%M</span> min </span>' +
        '<span class="countdown-block"><span class="label">%S</span> sec</span>'
      )
    );
  });

  // home slider
  $(".home-slider").owlCarousel({
    loop: true,
    autoplay: true,
    margin: 10,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    nav: true,
    autoplayHoverPause: false,
    items: 1,
    navText: [
      "<span class='ion-chevron-left'></span>",
      "<span class='ion-chevron-right'></span>"
    ],
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 1,
        nav: false
      },
      1000: {
        items: 1,
        nav: true
      }
    }
  });

  // home slider
  $(".testimony-slider").owlCarousel({
    loop: true,
    autoplay: true,
    margin: 10,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    nav: false,
    autoplayHoverPause: false,
    items: 1,
    navText: [
      "<span class='ion-chevron-left'></span>",
      "<span class='ion-chevron-right'></span>"
    ],
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 1,
        nav: false
      },
      1000: {
        items: 1,
        nav: false
      }
    }
  });

  // owl carousel
  var majorCarousel = $(".js-carousel-1");
  majorCarousel.owlCarousel({
    loop: true,
    autoplay: true,
    stagePadding: 7,
    margin: 20,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    nav: true,
    autoplayHoverPause: true,
    items: 3,
    navText: [
      "<span class='ion-chevron-left'></span>",
      "<span class='ion-chevron-right'></span>"
    ],
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: true,
        loop: false
      }
    }
  });

  // owl carousel
  var major2Carousel = $(".js-carousel-2");
  major2Carousel.owlCarousel({
    loop: true,
    autoplay: true,
    stagePadding: 7,
    margin: 20,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    nav: true,
    autoplayHoverPause: true,
    items: 4,
    navText: [
      "<span class='ion-chevron-left'></span>",
      "<span class='ion-chevron-right'></span>"
    ],
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 3,
        nav: false
      },
      1000: {
        items: 4,
        nav: true,
        loop: false
      }
    }
  });

  var contentWayPoint = function () {
    var i = 0;
    $(".element-animate").waypoint(
      function (direction) {
        if (
          direction === "down" &&
          !$(this.element).hasClass("element-animated")
        ) {
          i++;

          $(this.element).addClass("item-animate");
          setTimeout(function () {
            $("body .element-animate.item-animate").each(function (k) {
              var el = $(this);
              setTimeout(function () {
                var effect = el.data("animate-effect");
                if (effect === "fadeIn") {
                  el.addClass("fadeIn element-animated");
                } else if (effect === "fadeInLeft") {
                  el.addClass("fadeInLeft element-animated");
                } else if (effect === "fadeInRight") {
                  el.addClass("fadeInRight element-animated");
                } else {
                  el.addClass("fadeInUp element-animated");
                }
                el.removeClass("item-animate");
              }, k * 100);
            });
          }, 100);
        }
      },
      { offset: "95%" }
    );
  };
  contentWayPoint();

  /* EVENT LISTENERS EXERCISE */

  //show popup1 when mouse leaves the window
  document.addEventListener("mouseleave", function (event) {
    document.getElementById("popup1").style.visibility = "visible";
  });

  //hide popup1 when clicked on X button
  $("#popup1 .close").on("click", function (event) {
    document.getElementById("popup1").style.visibility = "hidden";
  });

  //email input validation

  function validateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // accepting a-zA-z0-9, dash, dot, underscore
    // can't start with a dot
    // making sure the domain doesn't start with a dot, after dot in domain only 2 or 3 characters
    if (inputText.value.match(mailformat)) {
      document.subscribe.subscribe_pemail.focus();
      return true;
    } else {
      alert("You have entered an invalid email address!");
      document.subscribe.subscribe_pemail.focus();
      return false;
    }
  }

  //validate email input, hide popup1, display popup2
  /* $('form').find('.button').on is the jQuery way of finding the submit GamepadButton, more reliable than the order of an array */
  document
    .getElementsByClassName("button")[0]
    .addEventListener("click", function () {
      if (validateEmail(document.subscribe.subscribe_pemail)) {
        document.getElementById("popup1").style.visibility = "hidden";
        document.getElementById("popup2").style.visibility = "visible";
      }
    });

  // hide popup2 when clicked on its X button
  $("#popup2 .close").on("click", function () {
    document.getElementById("popup2").style.visibility = "hidden";
  });

  // removing the onclick function linked to the button in th HTML file (throwing an error in the console)
  $('form[class="button"]').remove("onclick");

  // add a button to click it and show pop up 3
  $("h1").prepend(
    '<button id="popup3-btn" class="button btn-primary">click me to show popup</button>'
  );
  $("#popup3-btn")
    .css("height", "100px")
    .css("width", "300px")
    .css("border-radius", "5px");

  document.getElementById("popup3-btn").addEventListener("click", function () {
    document.getElementById("popup3").style.visibility = "visible";
  });

  // when popup3 is displayed, when the text is scrolled all the way to the bottom, display close button
  //$('#popup3 .popup').scrollTop() + $('#popup3 .popup').height() == $('#popup3 .popup').height() - a bit wrong logic

  // .on(what event it's listening for) is listening
  // .trigger(event name here) is actually firing the event

  $("#popup3 .popup").scroll(function () {
    if ($("#popup3 .popup").scrollTop() + $("#popup3 .popup").height() - 15 == $("#popup3 #dialog").height()) {
      $("#popup3 .close").css("visibility", "visible");
    }

    // make the close button work in popup3
    $("#popup3 .close").on("click", function () {
      $('#popup3').css('visibility', 'hidden')
      $('#popup3 .close').css('visibility', 'hidden')
    });

  });
})(jQuery);
