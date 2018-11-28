$(document).ready(function() {
  $('.hamburger').click(function(){
    $(this).toggleClass('is-active');
    $('nav').slideToggle('300');
  });

  var pillowsSwiper = new Swiper('.swiper-container-pillows', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 3,
    loop: true
  });
});
