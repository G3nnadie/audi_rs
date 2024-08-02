$(document).ready(function () {

  // Header height
  function headerHieght() {
    var headerHieght = $('.header').outerHeight(true);
    $('.wrapper').css('padding-top', headerHieght);
    $('.hero').css('margin-top', -headerHieght);
  }
  headerHieght();

  $(window).resize(function() {
    headerHieght();
  });

  // Show menu mobail
  $('.navbar-toggle').on('click', function () {
    $(this).toggleClass('active');
    $('.nav').slideToggle(200);
  });

  // Images
  $('.images__item').on('click', function(e) {
    e.preventDefault();
    let imageUrl = $(this).attr('href');
    $(this).parents('.images').find('.images__wrap img').attr('src', imageUrl);
    $(this).parents('.images').find('.images__item').removeClass('images__item--active');
    $(this).addClass('images__item--active');
  });

  // Hero
  var swiper = new Swiper(".hero", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 1,
    observer: true,
    observeSlideChildren: true,
    observeParents: true,
    autoplay: {
      delay: 33333000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
  });

  // Slider
  var swiper = new Swiper(".slider", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 1,
    observer: true,
    observeSlideChildren: true,
    observeParents: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

});