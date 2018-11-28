$(document).ready(function() {
  $('.hamburger').click(function(){
    $(this).toggleClass('is-active');
    $('nav').slideToggle('300');
    $('.logotype').fadeToggle('300');
  });

  var pillowsSwiper = new Swiper('.swiper-container-pillows', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    slidesPerView: 3,
    loop: true,
    breakpoints: {
      768:{
        slidesPerView: 1
      }
    }
  });
});
