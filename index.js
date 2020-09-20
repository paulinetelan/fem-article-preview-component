
$(".share-button")
  .click(function (event) {
    $(".share-button").toggleClass("active");
    $(".share-svg").toggleClass("active");
    $(".share-popup").toggleClass("show");
  });
