$(document).ready(function () {
  $(".header .header_wrap .btn-menu").on("click", function () {
    $(".header").addClass("open");
$('.header .gnb').fadeIn(200);
$("html, body").css({overflow : "hidden", height : $(window).height()}).bind("scroll touchmove usewheel", function(e){e.preventDefault();e.stopPropagation();return false;},function(){passive:false});
  });
  $(".header .header_wrap .btn-close").on("click", function () {
    $(".header").removeClass("open");
$('.header .gnb').fadeOut(1);

$("html, body").css({overflow : "visible", height : "auto"}).unbind('scroll touchmove mousewheel');
  });

});