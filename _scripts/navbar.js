jQuery(document).ready(function($) {

  $(".nav-menu").hide();

  $('#hamburger-nav').on('click', function(e){
    e.preventDefault();
    // $(this).toggleClass('close-button');
    $('.nav-menu').toggle();
    $('.navbar').toggleClass('dim');
  });

  $('.extra-content').hide();

  $('.project-content').on('click', function(e){
    $(this).next('.extra-content').slideToggle();
    $(this).contents().find('.arrow').toggleClass('rotate-open');
  });


});
