
$(".share-button")
  .mouseup(function (event) {
    console.log(event);
    $(".share-button").toggleClass("pressed");
    $(".share-popup")
      .toggleClass("show")
      .css({
      // left: Math.min(event.offsetX, $(window).innerWidth()-$('.share-button').outerWidth()),
      // top: event.offsetY + $('.share-button').innerHeight()
    });
  })
  .mousedown(function () {
    $(".share-button").toggleClass("pressed");
});
