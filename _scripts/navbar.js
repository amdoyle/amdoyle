jQuery(document).ready(function($) {

  console.log("page ready");

  $(".nav-menu").hide();

  console.log("nav should be hidden");

  $('.hamburger-nav').on('click', function(e){
    console.log("nav clicked");
    e.preventDefault();
    $('.nav-menu').toggle();
  });


});
