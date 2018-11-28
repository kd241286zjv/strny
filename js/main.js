$(document).ready(function() {
  $('.hamburger').click(function(){
    $(this).toggleClass('is-active');
    $('nav').slideToggle('300');
  });
});
