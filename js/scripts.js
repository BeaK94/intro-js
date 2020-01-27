(function() {
  var itemClassName = "slider__photo";
  (items = document.getElementsByClassName(itemClassName)),
    (totalItems = items.length),
    (slide = 0);

  // Set event listeners
  function setEventListeners() {
    var next = document.getElementsByClassName("slider__button--next")[0],
      prev = document.getElementsByClassName("slider__button--prev")[0];

    next.addEventListener("click", getNext);
    prev.addEventListener("click", getPrev);
  }

  function getNext() {
    // TODO
    //remove "active" from the first img
    items[slide].classList.remove("active");
    //change the index of the one I want to be active to the next one of the class of images
    slide++;
    if (slide < totalItems) {
      items[slide].classList.add("active");
    } else {
      //if slide is the last picture
      slide = 0;
      items[slide].classList.add("active");
    }
  }

  /* HOANG'S SOLUTION
  getNext() {
      items[slide].classList.remove("active");
      if (slide === totalItems - 1) {
          slide = 0;
      } else {
          slide++
      }
  }

  ANOTHER, WITH A SHORTCUT (instead of the if/else statement)
  slide = (slide === totalItems - 1 ) ? 0 : slide++;
  */

  function getPrev() {
    // TODO
    items[slide].classList.remove("active");
    slide--;
    if (slide >= 0) {
      items[slide].classList.add("active");
    } else {
      //if slide = 0, if the picture is the first one
      slide = totalItems - 1;
      items[slide].classList.add("active");
    }
  }

  /* HOANG'S SOLUTION
  getPrev() {
      items[slide].classList.remove("active");
      if (slide === 0) {
          slide = totalItems - 1;
      } else {
          slide--
      }
  }

  ANOTHER, WITH A SHORTCUT (instead of the if/else statement)
  slide = (slide === 0 ) ? totalItems - 1 : slide++;

  not sure if the getPrev works, I wrote it myself based on Hoang's
  */

  function initSlider() {
    // setInitialClasses();
    setEventListeners();

    // Set moving to false so that the slider becomes interactive
    moving = false;
  }

  initSlider();
})();
