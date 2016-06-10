jQuery(document).ready(function($) {

  $(".nav-menu").hide();

  $('#hamburger-nav').on('click', function(e){;
    e.preventDefault();
    $(this).toggleClass('close-button');
    $('.nav-menu').slideToggle();
    $('#logo').toggleClass('dim');
  });


});
