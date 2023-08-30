$(document).ready(function(){
  $('.menu>li').mouseover(function(){
    $(this).find('.sub').stop().slideDown();
  });
  $('.menu>li').mouseout(function(){
    $(this).find('.sub').stop().slideUp();
  });

  setInterval(function(){
    $('.slidebox a:first-child').fadeOut()
    .next('a').fadeIn()
    .end().appendTo('.slidebox');
  },3000);

  $('.tab p').click(function(){
    $(this).parent().addClass('active')
    .siblings().removeClass('active');
    return false;
  });
  $('.tab li:first').click(function(){
    $('.pop').addClass('active');
  });
  $('.btn').click(function(){
    $('.pop').removeClass('active');
  });
});