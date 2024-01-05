$(function(){

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