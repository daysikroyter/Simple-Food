$(function () {

  Fancybox.bind('[data-fancybox="gallery"]', {
    // Your custom options for a specific gallery
  });


  $('.product__form-star').rateYo({
    starWidth: "16px",
    normalFill: "rgba(193, 193, 193, 0.3)",
    ratedFill: "#FFB800",
    spacing: "6px",
    readOnly: false,
    "starSvg": "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'><g clip-path='url(#clip0_3197_363)'><path d='M0.0229731 6.16432C0.0780973 5.9946 0.224753 5.87091 0.401315 5.84529L5.36139 5.12451L7.57966 0.629933C7.6586 0.469933 7.82157 0.368652 7.99997 0.368652C8.17841 0.368652 8.34135 0.469933 8.42032 0.629933L10.6387 5.12451L15.5987 5.84529C15.7752 5.87091 15.9219 5.9946 15.977 6.16429C16.0322 6.334 15.9862 6.52028 15.8584 6.64481L12.2694 10.1434L13.1165 15.0834C13.1467 15.2593 13.0744 15.437 12.9301 15.5419C12.8484 15.6012 12.7517 15.6314 12.6545 15.6314C12.5799 15.6314 12.505 15.6136 12.4365 15.5776L8 13.2451L3.56374 15.5775C3.40577 15.6606 3.21443 15.6467 3.07009 15.5419C2.92574 15.437 2.8534 15.2593 2.88356 15.0834L3.73096 10.1434L0.141566 6.64478C0.0138168 6.52028 -0.0322151 6.334 0.0229731 6.16432Z' /></g><defs><clipPath id='clip0_3197_363'><rect width='16' height='16' fill='white' transform='matrix(-1 0 0 1 16 0)'/></clipPath></defs></svg>"
  });

  $(".star, .product__star").rateYo({
    starWidth: "16px",
    normalFill: "rgba(193, 193, 193, 0.3)",
    ratedFill: "#FFB800",
    spacing: "6px",
    readOnly: true,
    "starSvg": "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'><g clip-path='url(#clip0_3197_363)'><path d='M0.0229731 6.16432C0.0780973 5.9946 0.224753 5.87091 0.401315 5.84529L5.36139 5.12451L7.57966 0.629933C7.6586 0.469933 7.82157 0.368652 7.99997 0.368652C8.17841 0.368652 8.34135 0.469933 8.42032 0.629933L10.6387 5.12451L15.5987 5.84529C15.7752 5.87091 15.9219 5.9946 15.977 6.16429C16.0322 6.334 15.9862 6.52028 15.8584 6.64481L12.2694 10.1434L13.1165 15.0834C13.1467 15.2593 13.0744 15.437 12.9301 15.5419C12.8484 15.6012 12.7517 15.6314 12.6545 15.6314C12.5799 15.6314 12.505 15.6136 12.4365 15.5776L8 13.2451L3.56374 15.5775C3.40577 15.6606 3.21443 15.6467 3.07009 15.5419C2.92574 15.437 2.8534 15.2593 2.88356 15.0834L3.73096 10.1434L0.141566 6.64478C0.0138168 6.52028 -0.0322151 6.334 0.0229731 6.16432Z' /></g><defs><clipPath id='clip0_3197_363'><rect width='16' height='16' fill='white' transform='matrix(-1 0 0 1 16 0)'/></clipPath></defs></svg>"
  });

  $('.product__popup-list').slick({
    prevArrow: '<button type="button" class="slick-arrow arrow-prev"><svg class="arrow"><use xlink:href="images/icons/sprites/sprite.svg#prev-arrow"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-arrow arrow-next"><svg class="arrow"><use xlink:href="images/icons/sprites/sprite.svg#prev-arrow"></use></svg></button>',
  });

  $('.product__slider-list').slick({
    fade: true,
    prevArrow: '<button type="button" class="product-arrow product-prev"><img src="images/icons/product-arrow.svg" alt="предыдущий слайд"></button>',
    nextArrow: '<button type="button" class="product-arrow product-next"><img src="images/icons/product-arrow.svg" alt="следующий слайд"></button>',
    responsive: [
      {
        breakpoint: 366,
        settings: {
          arrows: false
        }
      }
    ]
  });

  $('.explore__list').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: false,
    autoplay: true,
    prevArrow: '<button type="button" class="slick-arrow arrow-prev"><svg class="arrow"><use xlink:href="images/icons/sprites/sprite.svg#prev-arrow"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-arrow arrow-next"><svg class="arrow"><use xlink:href="images/icons/sprites/sprite.svg#prev-arrow"></use></svg></button>',
    responsive: [
      {
        breakpoint: 1051,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 891,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 561,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true,
          slidesToScroll: 2,
          infinite: true
        }
      }
    ]
  });

  $('.link--disabled').on('click', function (e) {
    e.preventDefault();
  });

  var $range = $(".js-range-slider"),
    $inputFrom = $(".js-input-from"),
    $inputTo = $(".js-input-to"),
    min = 0,
    max = 1200,
    from = 100,
    to = 1000;

  $range.ionRangeSlider({
    type: "double",
    min: min,
    max: max,
    from: from,
    to: to,
    min_interval: 150,
    onStart: updateInputs,
    onChange: updateInputs
  });

  function updateInputs(data) {
    $inputFrom.prop("value", data.from);
    $inputTo.prop("value", data.to);
  }

  $inputFrom.on("input", function () {
    var val = Math.min(Math.max($(this).val(), min), to);
    $range.data("ionRangeSlider").update({ from: val });
  });

  $inputTo.on("input", function () {
    var val = Math.min(Math.max($(this).val(), from), max);
    $range.data("ionRangeSlider").update({ to: val });
  });

  $('.select-style').styler();

  function initSlick() {
    $('.restaurants__list, .promotions__list').slick({
      arrows: false,
      dots: true,
      slidesToShow: 1
    });
  }

  function destroySlick() {
    if ($('.restaurants__list, .promotions__list').hasClass('slick-initialized')) {
      $('.restaurants__list, .promotions__list').slick('unslick');
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

  $('.burger-btn').on('click', function () {
    $('.menu-burger').addClass('menu-burger--active');
    $('.overlay').addClass('overlay--active');
    $('body').addClass('lock');
  });

  $('.shop__nav-btn').on('click', function () {
    $('.filter-menu').addClass('filter-menu--active');
    $('.overlay').addClass('overlay--active');
    $('body').addClass('lock');
  });

  $('.menu-burger__btn').on('click', function () {
    $('.menu-burger').removeClass('menu-burger--active');
    $('.overlay').removeClass('overlay--active');
    $('body').removeClass('lock');
  });

  $('.filter-menu__btn').on('click', function () {
    $('.filter-menu').removeClass('filter-menu--active');
    $('.overlay').removeClass('overlay--active');
    $('body').removeClass('lock');
  });

  $('.overlay').on('click', function () {
    $('.menu-burger').removeClass('menu-burger--active');
    $('.filter-menu').removeClass('filter-menu--active');
    $('.overlay').removeClass('overlay--active');
    $('body').removeClass('lock');
  });

  $('.reviews__slider').slick({
    dots: true,
    arrows: true,
    autoplay: true,
    fade: true,
    infinite: false,
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