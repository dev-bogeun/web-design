$(document).ready(function(){
  $('.menu li').mouseover(function(){
    $('.sub').stop().slideDown();
    $('.menuBg').stop().slideDown();
  })
  $('.menu li').mouseout(function(){
    $('.sub').stop().slideUp();
    $('.menuBg').stop().slideUp();
  })

  setInterval(function(){
    $('.slidebox a:first-child').fadeOut()
    .next('a').fadeIn()
    .end().appendTo('.slidebox');
  },3000);
})