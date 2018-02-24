var carousel = (function(){
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
     variableWidth: false
  });
})

var nav_handler = (function(){
  var nav_item = $('[data-go]');
  var container = $('[data-content]');

  nav_item.on("click", function(){
    if(!$(this).hasClass("is--active")){
      nav_item.removeClass("is--active");
      $(this).addClass('is--active');
      var curr_value = $(this).attr("data-go");
      $('[data-content]').removeClass("is--active");
      $('[data-content='+curr_value+']').addClass("is--active");
    }
  })
})

var piling = (function(){
  $('#pagepiling').pagepiling({
    menu: null,
    direction: 'horizontal',
    verticalCentered: true,
    sectionsColor: ["#fff","#fff","#fff","#fff","#fff"],
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

    onLeave: function(index, nextIndex, direction){},
    afterLoad: function(anchorLink, index){},
    afterRender: function(){}
  });

})

$(document).ready(function() {
    carousel();
    nav_handler();
    piling();
});
