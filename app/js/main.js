$(function(){

  $('.reviews__slider').slick({
    dots: true,
    arrows: true,
    autoplay: true,
    fade: true,
    prevArrow: '<button type="button" class="slick-btn slick-prev"><svg class="arrow"><use xlink:href="images/icons/sprites/sprite.svg#prev-arrow"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><svg class="arrow"><use xlink:href="images/icons/sprites/sprite.svg#prev-arrow"></use></svg></button>',
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