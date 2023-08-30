$(document).ready(function(){
  $('.menu li').mouseover(function(){
    $('.sub, .menuBg').stop().slideDown();
  })
  $('.sub, .menu li').mouseout(function(){
    $('.sub, .menuBg').stop().slideUp();
  })

  setInterval(function(){
    $('.slidebox a:first-child').fadeOut()
    .next('a').fadeIn()
    .end().appendTo('.slidebox');
  },3000);

  $('.tab p').click(function(){
    $(this).parent().addClass('active')
    .siblings().removeClass('active');
  })
});