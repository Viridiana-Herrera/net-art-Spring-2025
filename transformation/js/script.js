$(document).ready(function () {
  let isFirstImage = true;

  $("body.index").on("click", function () {
    if (isFirstImage) {
      $(this).css("background-image", "url('img/bs1.jpeg')");
    } else {
      $(this).css("background-image", "url('img/bs2.jpeg')");
    }
    isFirstImage = !isFirstImage;
  });

  $("#div1, button").on("click", function (event) {
    event.stopPropagation();
  });

  $("button").click(function () {
    $("#div1").fadeToggle();
  });


  $(".bs3, .bs4, .bs5").click(function (event) {
    event.stopPropagation(); 
    $(this).animate({
      width: "+=20px",
      height: "+=20px"
    }, 300);
  });
});