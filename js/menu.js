$(document).ready(function(){
  $(".button-menu").click(function(){
    $(this).toggleClass("is-active");
  });
});

$(function() {     
  $('.button-menu').on('click', function(e) {
    e.preventDefault();
    $('.menu-1').toggleClass('nav-active');
    $('nav').toggleClass('nav-fixed');

  });
});