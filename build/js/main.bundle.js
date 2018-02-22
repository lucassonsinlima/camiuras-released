'use strict';

var carousel = function carousel() {
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    focusOnSelect: true
  });
};

var nav_handler = function nav_handler() {
  var nav_item = $('[data-go]');
  var container = $('[data-content]');

  nav_item.on("click", function () {
    if (!$(this).hasClass("is--active")) {
      nav_item.removeClass("is--active");
      $(this).addClass('is--active');
      var curr_value = $(this).attr("data-go");
      $('[data-content]').removeClass("is--active");
      $('[data-content=' + curr_value + ']').addClass("is--active");
    }
  });
};

$(document).ready(function () {
  carousel();
  nav_handler();
});
//# sourceMappingURL=main.bundle.js.map
