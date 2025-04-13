$(document).ready(function () {
  let isFirstImage = true;

  $("body.index").on("click", function () {
    if (isFirstImage) {
      $(this).css("background-image", "url('../img/bs1.jpeg')");
    } else {
      $(this).css("background-image", "url('../img/bs2.jpeg')");
    }
    isFirstImage = !isFirstImage;
  });

  // Prevent click on button or #div1 from triggering the body click event
  $("#div1, button").on("click", function (event) {
    event.stopPropagation();
  });

  // Show/hide the quote block
  $("button").click(function () {
    $("#div1").fadeToggle();
  });

  // Enlarge image on click
  $(".bs3, .bs4, .bs5").click(function (event) {
    event.stopPropagation(); // prevent triggering body click
    $(this).animate({
      width: "+=20px",
      height: "+=20px"
    }, 300);
  });
});