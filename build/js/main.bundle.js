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
    variableWidth: false,
    prevArrow: '<button class="slick-prev slick-arrow text__lighter--orange text--bordered" aria-label="Previous" type="button" style="">Prev</button>',
    nextArrow: '<button class="slick-next slick-arrow text__lighter--orange text--bordered" aria-label="Next" type="button" style="">Next</button>'

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

var piling = function piling() {
  $('#pagepiling').pagepiling({
    menu: null,
    direction: 'horizontal',
    verticalCentered: true,
    sectionsColor: ["#fff", "#fff", "#fff", "#fff", "#fff"],
    anchors: ['home', 'home2', 'about', 'tech', 'works'],
    scrollingSpeed: 400,
    easing: 'swing',
    loopBottom: false,
    loopTop: false,
    css3: true,
    navigation: false,
    normalScrollElements: null,
    normalScrollElementTouchThreshold: 5,
    touchSensitivity: 5,
    keyboardScrolling: true,
    sectionSelector: '.section',
    animateAnchor: true,

    onLeave: function onLeave(index, nextIndex, direction) {},
    afterLoad: function afterLoad(anchorLink, index) {},
    afterRender: function afterRender() {}
  });
};

$(document).ready(function () {
  carousel();
  nav_handler();
  piling();
});
//# sourceMappingURL=main.bundle.js.map
