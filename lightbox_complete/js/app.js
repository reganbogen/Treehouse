//Problem: user when clicking on image goes to a dead end, poor user experience.
//Solution: Create an overlay with large image, dim background - lightbox
var $overlay = $('<div id="overlay"></div>')
var $image = $("<img>");
var $caption = $("<p></p>")

//Add image to overlay
$overlay.append($image);

//Add a caption to overlay
$overlay.append($caption);

//Add Overlay
$("body").append($overlay);


//1. Capture the click event on a link to an image
$("#imageGallery a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href")
  //Update overlay with the image linked in the link
  $image.attr("src", imageLocation);

  //Show the Overlay
  $overlay.show();
  
  //Get child's alt attribute and set caption
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
});

//whenoverlay is clicked
$overlay.click(function(){
    //Hide the overlay
  $overlay.hide();
})

