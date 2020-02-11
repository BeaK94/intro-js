var flickrAPI = "add-the-URL-here";

/**
 * Call the render function to render image content if there are result,
 * otherwise, discard and print out the notification that nothing is found
 * Call addFavouriteButtonEvent function once finished rendering images
 *
 * @param   {Object}    resp contains the data that we retrieved from the AJAX call to to flickr
 * @return  {Boolean}   false if no image is found
 * @return  {Void}      if images get rendered
 */
function handleResponse(resp) {
  console.log("The request has been completed");
  console.log(resp);

  if (resp.items.length === 0) {
    $("#imageWrapper").text("There is no image matching your search term");
    return;
  }

  renderContent(resp);
}

function renderContent(resp) {
  // TODO add render logic here
  var _newImageEl = createImage(url);
  $(".imageWrapper").append(newImageEl);
}

function createImage(url) {
  // TODO generate image element here
}

function doAjaxCall(searchTerm) {
  var paramsForFlickr = {
    tags: searchTerm,
    tagmode: "any",
    format: "json"
  };

  $.getJSON(flickrAPI, paramsForFlickr, handleResponse);
}

$(document).ready(function() {
  $('[name="searchButton"]').click(function() {
    console.log("User's search is: " + document.searchBar.searchQuery.value);

    $.ajax({
      url: "//api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
      dataType: "json",
      data: {
        //here the parameters from the documentation of the API
        tags: document.searchBar.searchQuery.value,
        tagmode: "any",
        format: "json"
      }
    }).done(function(data) {
      console.log(data);
      // add a new picture. It you want to replace the picture, put html instead of append
      /* $("#imageWrapper").append(
        "<img src=" + data.items[0].media.m + "></img>"
      ); */

      //clear the picture div
      $("#imageWrapper").empty();
      //go through the array of results, append each picture; add all the div classes to have the pictures nicely CSS-ed
      data.items.forEach(function(item) {
        $("#imageWrapper").append(`<div class="col-md-3 col-sm-4 col-xs-6">
        <img class="img-responsive" src="${item.media.m}">
        </img>
    </div>`);
      });
    });
  });
});
