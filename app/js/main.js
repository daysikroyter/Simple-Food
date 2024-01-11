$(function(){

  function initSlick() {
    $('.restaurants__list').slick({
      arrows: false,
      dots: true,
      slidesToShow: 1
    });
  }

  function destroySlick() {
    if ($('.restaurants__list').hasClass('slick-initialized')) {
      $('.restaurants__list').slick('unslick');
    }
  }

  if (window.matchMedia("(max-width: 768px)").matches) {
    initSlick();
  }

  $(window).resize(function () {
    if (window.matchMedia("(max-width: 768px)").matches) {
      initSlick();
    } else {
      destroySlick();
    }
  });

  $('.burger-btn').on('click', function() {
    $('.menu-burger').addClass('menu-burger--active');
    $('.overlay').addClass('overlay--active');
  });
  
  $('.menu-burger__btn').on('click', function() {
    $('.menu-burger').removeClass('menu-burger--active');
    $('.overlay').removeClass('overlay--active');
  });
  
  $('.overlay').on('click', function() {
    $('.menu-burger').removeClass('menu-burger--active'); 
    $('.overlay').removeClass('overlay--active');
  });

  $('.reviews__slider').slick({
    dots: true,
    arrows: true,
    autoplay: true,
    fade: true,
    prevArrow: '<button type="button" class="slick-btn slick-prev"><svg class="arrow"><use xlink:href="images/icons/sprites/sprite.svg#prev-arrow"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><svg class="arrow"><use xlink:href="images/icons/sprites/sprite.svg#prev-arrow"></use></svg></button>',
    responsive: [
      {
        breakpoint: 561,
        settings: {
          dots: false
        }
      },
    ]
  });

  $('.tab').on('click', function (e) {
    e.preventDefault();

    const $tabs = $(this).closest('.tabs');
    const index = $(this).parent().index();

    $tabs.find('.tab--active').removeClass('tab--active');
    $(this).addClass('tab--active');

    const $contents = $tabs.next('.tabs-inner').find('.tabs-content');
    $contents.removeClass('tabs-content--active');
    $contents.eq(index).addClass('tabs-content--active');
  });

});